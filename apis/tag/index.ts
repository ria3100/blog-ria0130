export type TagItem = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
}

export interface Methods {
  get: {
    resBody: {
      contents: TagItem[]
      totalCount: number
      offset: number
      limit: number
    }
  }
}
