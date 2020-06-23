export type Like = {
  likedId: string
}

export abstract class ILikeRepository {
  abstract async find(path: string): Promise<Like>
  abstract async add(path: string): Promise<Like>
  abstract async remove(id: Like): Promise<Like>
}
