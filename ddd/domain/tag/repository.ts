import { Tag } from '~/ddd/domain/tag/entity'

export interface TagRepository {
  list(): Promise<Tag[]>
}
