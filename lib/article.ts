import { ArticleRepositoryImpl } from '~/ddd/infrastructure/articleRepositoryImpl'
import { ArticleRepository } from '~/ddd/domain/article/repository'

import {
  IdsArticleUsecase,
  ListArticleUsecase,
  FindArticleUsecase,
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

export const getAllArticleSlug = async () => {
  const idsArticleUsecase = new IdsArticleUsecase(articleRepository)
  const result = await idsArticleUsecase.do()

  return result
}

export const getArticlelist = async ({
  page,
  tag,
}: {
  page?: number
  tag?: string
}) => {
  const listArticleUsecase = new ListArticleUsecase(articleRepository)
  const result = await listArticleUsecase.do({ page, tag })

  return result
}

export const getArticle = async (id: string) => {
  const findArticleUsecase = new FindArticleUsecase(articleRepository)
  const result = await findArticleUsecase.do(id)

  return result
}
