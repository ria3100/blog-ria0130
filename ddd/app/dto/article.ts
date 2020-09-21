import { Article } from '~/ddd/domain/article/entity'

export const articleDTO = (article: Article) => ({
  id: article.id,
  title: article.title,
  publishedAt: article.publishedAt,
  description: article.description,
  tags: article.tags,
  body: article.body,
})
