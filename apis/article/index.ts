type TagItem = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
}

export type ArticleItem = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  description: string
  tags: TagItem[]
  markdown: string
}

export interface Methods {
  get: {
    resBody: {
      contents: ArticleItem[]
      totalCount: number
      offset: number
      limit: number
    }
  }
}
