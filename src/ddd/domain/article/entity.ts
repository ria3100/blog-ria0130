type Params = {
  id: string
  title: string
  publishedAt: string
  description: string
  tags: string[]
  body: string
}

export class Article {
  public readonly id: string
  public readonly title: string
  public readonly publishedAt: string
  public readonly description: string
  public readonly tags: string[]
  public readonly body: string

  public constructor(params: Params) {
    this.id = params.id
    this.title = params.title
    this.publishedAt = params.publishedAt
    this.description = params.description
    this.tags = params.tags
    this.body = params.body
  }
}
