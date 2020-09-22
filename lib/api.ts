import { ArticleRepositoryImpl } from '~/ddd/infrastructure/articleRepositoryImpl'
import { ArticleRepository } from '~/ddd/domain/article/repository'

import { TagRepositoryImpl } from '~/ddd/infrastructure/tagRepositoryImpl'
import { TagRepository } from '~/ddd/domain/tag/repository'

import {
  IdsArticleUsecase,
  ListArticleUsecase,
  FindArticleUsecase,
  ListTagUsecase,
} from '~/ddd/app/usecase'

const connection = {
  host: process.env.NEXT_PUBLIC_MICRO_CMS || '',
  option: {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY || '' },
  },
}

const articleRepository: ArticleRepository = new ArticleRepositoryImpl(
  connection
)
const tagRepository: TagRepository = new TagRepositoryImpl(connection)

export const getArticleSlugs = async ({ tagId }: { tagId?: string } = {}) => {
  const idsArticleUsecase = new IdsArticleUsecase(articleRepository)
  const result = await idsArticleUsecase.do({ tagId })

  return result
}

export const getArticlelist = async ({
  page,
  tagId,
}: {
  page?: number
  tagId?: string
} = {}) => {
  const listArticleUsecase = new ListArticleUsecase(articleRepository)
  const result = await listArticleUsecase.do({ page, tagId })

  return result
}

export const getArticle = async (id: string) => {
  const findArticleUsecase = new FindArticleUsecase(articleRepository)
  const result = await findArticleUsecase.do(id)

  return result
}

export const getTaglist = async () => {
  const listTagUsecase = new ListTagUsecase(tagRepository)
  const result = await listTagUsecase.do()

  return result
}
