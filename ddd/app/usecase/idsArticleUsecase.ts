import { ArticleRepository } from '~/ddd/domain/article/repository'

export class IdsArticleUsecase {
  private readonly articleRepository: ArticleRepository

  public constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository
  }

  public async do({ tagId }: { tagId?: string }) {
    const query = {
      fields: ['id'],
      tagId,
    }

    const { articles } = await this.articleRepository.list(query)

    return articles.map((article) => article.id)
  }
}
