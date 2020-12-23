import { Tag } from '~/ddd/domain/tag/entity'
import { TagRepository } from '~/ddd/domain/tag/repository'
import { tagDTO } from '~/ddd/app/dto/tag'

export class ListTagUsecase {
  private readonly tagRepository: TagRepository

  public constructor(tagRepository: TagRepository) {
    this.tagRepository = tagRepository
  }

  public async do() {
    const tags = await this.tagRepository.list()

    if (!tags) return [] as Tag[]

    return tags.map((tag) => tagDTO(tag))
  }
}
