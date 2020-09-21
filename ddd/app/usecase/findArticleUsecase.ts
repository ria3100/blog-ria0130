import { Article } from '~/ddd/domain/article/entity'
import { ArticleRepository } from '~/ddd/domain/article/repository'
import { articleDTO } from '~/ddd/app/dto/article'

export class FindArticleUsecase {
  private readonly articleRepository: ArticleRepository

  public constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository
  }

  public async do(id: string) {
    const article: Article = await this.articleRepository.find(id)
    if (!article) return {} as Article

    return articleDTO(article)
  }
}
