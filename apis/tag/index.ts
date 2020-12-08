export type TagItem = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
}

export interface Methods {
  get: {
    query?: {
      limit?: number
    }
    resBody: {
      contents: TagItem[]
      totalCount: number
      offset: number
      limit: number
    }
  }
}
