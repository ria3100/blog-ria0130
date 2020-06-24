export type LikedId = string

export type Like = {
  uid: string
  path: string
  createdAt: string
}

export abstract class ILikeRepository {
  abstract async count(search: Pick<Like, 'path'>): Promise<number>

  abstract async find(
    search: Pick<Like, 'uid' | 'path'>
  ): Promise<LikedId | null>

  abstract async add(search: Pick<Like, 'uid' | 'path'>): Promise<LikedId>

  abstract async remove(likedId: string): Promise<LikedId>
}
