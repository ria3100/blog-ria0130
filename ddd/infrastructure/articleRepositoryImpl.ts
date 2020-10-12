import dayjs from 'dayjs'
import fetch from 'node-fetch'
import aspida from '@aspida/node-fetch'

import api from '~/apis/$api'
import { ArticleItem } from '~/apis/article'
import { Article } from '~/ddd/domain/article/entity'
import { ListParams } from '~/ddd/domain/article/repository'
import { markdownToHtml } from '~/lib/markdownToHtml'

type Connection = {
  host: string
  config: { headers: { 'X-API-KEY': string } }
}

const converContent = async (item: ArticleItem) => {
  const { id, title, publishedAt, description, tags, markdown } = item

  return new Article({
    id,
    title,
    publishedAt: publishedAt ? dayjs(publishedAt).format('YYYY-MM-DD') : '',
    description: description,
    tags: tags ? tags.map((tag: ArticleItem['tags'][0]) => tag.name) : [],
    body: markdown ? await markdownToHtml(markdown) : '',
  })
}

export class ArticleRepositoryImpl {
  private readonly connection: Connection
  private readonly pageNum: number = 10

  constructor(connection: Connection) {
    this.connection = connection
  }

  public async list(params: ListParams) {
    const { host, config } = this.connection

    const query = []

    if (params.page) {
      const limit = this.pageNum
      const offset = this.pageNum * params.page - this.pageNum
      query.push(`limit=${limit}`)
      query.push(`offset=${offset}`)
    }

    if (params.fields) query.push(`fields=${params.fields.join()}`)

    if (params.tagId) query.push(`filters=tags[contains]${params.tagId}`)

    const f = api(aspida(fetch, { baseURL: host }))
    const res = await f.article.$get({ config })

    if (!res?.contents)
      return {
        articles: [] as Article[],
        totalCount: 0,
        offset: 0,
        limit: 0,
      }

    const posts = res

    const articles = await Promise.all(
      posts.contents.map(async (post) => await converContent(post))
    )

    return {
      articles,
      totalCount: posts.totalCount,
      offset: posts.offset,
      limit: posts.limit,
    }
  }

  public async find(id: string) {
    const { host, config } = this.connection

    const f = api(aspida(fetch, { baseURL: host }))
    const res = await f.article._contentId(id).$get({ config })

    if (!res.title) return null

    return await converContent(res)
  }
}
