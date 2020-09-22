import { Article } from '~/ddd/domain/article/entity'

export type ListParams = {
  page?: number
  fields?: string[]
  tagId?: string
}

export interface ArticleRepository {
  list(
    params: ListParams
  ): Promise<{
    articles: Article[]
    totalCount: number
    offset: number
    limit: number
  }>
  find(id: string): Promise<Article>
}
