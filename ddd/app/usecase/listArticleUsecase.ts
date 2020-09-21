import { ArticleRepository } from '~/ddd/domain/article/repository'
import { articleDTO } from '~/ddd/app/dto/article'

export class ListArticleUsecase {
  private readonly articleRepository: ArticleRepository

  public constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository
  }

  public async do({ page, tag }: { page?: number; tag?: string }) {
    const query = {
      page,
      fields: ['id', 'publishedAt', 'title', 'description', 'tags'],
      tag,
    }

    const { articles } = await this.articleRepository.list(query)

    if (!articles) return undefined

    return articles.map((article) => articleDTO(article))
  }
}
