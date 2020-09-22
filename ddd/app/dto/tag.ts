import { Tag } from '~/ddd/domain/tag/entity'

export const tagDTO = (tag: Tag) => ({
  id: tag.id,
  name: tag.name,
})
