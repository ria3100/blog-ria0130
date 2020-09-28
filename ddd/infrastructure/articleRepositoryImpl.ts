import dayjs from 'dayjs'
import fetch from 'node-fetch'

import { Article } from '~/ddd/domain/article/entity'
import { ListParams } from '~/ddd/domain/article/repository'
import { markdownToHtml } from '~/lib/markdownToHtml'

type Connection = {
  host: string
  option: { headers: { 'X-API-KEY': string } }
}

type ResponseArticle = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  description: string
  tags: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    name: string
  }[]
  markdown: string
}

type responseList = {
  contents: ResponseArticle[]
  totalCount: number
  offset: number
  limit: number
}

const converContent = async (item: ResponseArticle) => {
  const { id, title, publishedAt, description, tags, markdown } = item

  return new Article({
    id,
    title,
    publishedAt: publishedAt ? dayjs(publishedAt).format('YYYY-MM-DD') : '',
    description: description,
    tags: tags ? tags.map((tag: ResponseArticle['tags'][0]) => tag.name) : [],
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
    const { host, option } = this.connection

    const query = []

    if (params.page) {
      const limit = this.pageNum
      const offset = this.pageNum * params.page - this.pageNum
      query.push(`limit=${limit}`)
      query.push(`offset=${offset}`)
    }

    if (params.fields) {
      query.push(`fields=${params.fields.join()}`)
    }

    // FIXME: タグ絞り込み作る
    // if (params.tag)

    const res = await fetch(`${host}/article/?${query.join('&')}`, option)
    if (!res.ok)
      return {
        articles: [] as Article[],
        totalCount: 0,
        offset: 0,
        limit: 0,
      }

    const posts = (await res.json()) as responseList

    const articles = await Promise.all(
      posts.contents.map(
        async (post: ResponseArticle) => await converContent(post)
      )
    )

    return {
      articles,
      totalCount: posts.totalCount,
      offset: posts.offset,
      limit: posts.limit,
    }
  }

  public async find(id: string) {
    const { host, option } = this.connection
    const res = await fetch(`${host}/article/${id}`, option)

    if (!res.ok) return null

    const post = (await res.json()) as ResponseArticle

    return await converContent(post)
  }
}
