import { Tag } from '~/ddd/domain/tag/entity'

type Connection = {
  host: string
  option: { headers: { 'X-API-KEY': string } }
}

type ResponseTag = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
}

type responseList = {
  contents: ResponseTag[]
  totalCount: number
  offset: number
  limit: number
}

export class TagRepositoryImpl {
  private readonly connection: Connection

  constructor(connection: Connection) {
    this.connection = connection
  }

  public async list() {
    const { host, option } = this.connection

    const res = await fetch(`${host}/tag/`, option)

    const tagList = (await res.json()) as responseList

    return tagList.contents.map(
      (tag) => new Tag({ id: tag.id, name: tag.name })
    )
  }
}
