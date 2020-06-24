import * as React from 'react'

import { UserRepository } from '~/repository/user/UserRepositoryImpl'
import { LikeRepository } from '~/repository/like/LikeRepositoryImpl'

export const useLike = (path: string) => {
  const isClient = typeof window !== 'undefined'

  const _UserRepository = new UserRepository()
  const _LikeRepository = new LikeRepository()

  const [uid, setUid] = React.useState<string | null>(null)
  const [likedId, setLikedId] = React.useState<string | null>(null)

  let isLoading: boolean = false

  React.useEffect(() => {
    if (!isClient) return

    const init = async () => {
      const user = await _UserRepository.fetchUser()
      if (!user.uid) return

      setUid(user.uid)

      const likedId = await _LikeRepository.find({ uid: user.uid, path })
      setLikedId(likedId)
    }

    init()
  }, [])

  const add = async () => {
    if (!uid) return

    const likedId = await _LikeRepository.add({ uid, path })
    setLikedId(likedId)
  }

  const remove = async () => {
    if (!likedId) return

    await _LikeRepository.remove(likedId)
    setLikedId(null)
  }

  const toggleLike = async () => {
    if (!isClient || isLoading) return

    isLoading = true

    const toggle = !likedId ? add : remove
    await toggle()

    isLoading = false
  }

  return {
    liked: !!likedId,
    toggleLike,
  }
}
