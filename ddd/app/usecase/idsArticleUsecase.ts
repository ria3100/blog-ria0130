import { ArticleRepository } from '~/ddd/domain/article/repository'

export class IdsArticleUsecase {
  private readonly articleRepository: ArticleRepository

  public constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository
  }

  public async do(tag?: string) {
    const query = {
      fields: ['id'],
      tag,
    }

    const { articles } = await this.articleRepository.list(query)

    if (!articles) return []

    return articles.map((article) => article.id)
  }
}
