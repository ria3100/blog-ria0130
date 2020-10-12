import fetch from 'node-fetch'
import aspida from '@aspida/node-fetch'

import api from '~/apis/$api'
import { Tag } from '~/ddd/domain/tag/entity'

type Connection = {
  host: string
  config: { headers: { 'X-API-KEY': string } }
}

export class TagRepositoryImpl {
  private readonly connection: Connection

  constructor(connection: Connection) {
    this.connection = connection
  }

  public async list() {
    const { host, config } = this.connection

    const f = api(aspida(fetch, { baseURL: host }))
    const res = await f.tag.$get({ config })

    return res.contents.map((tag) => new Tag({ id: tag.id, name: tag.name }))
  }
}
