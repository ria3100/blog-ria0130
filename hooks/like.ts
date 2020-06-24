import * as React from 'react'

import { UserRepository } from '~/repository/user/UserRepositoryImpl'
import { LikeRepository } from '~/repository/like/LikeRepositoryImpl'

export const useLike = (path: string) => {
  const isClient = typeof window !== 'undefined'

  const _UserRepository = new UserRepository()
  const _LikeRepository = new LikeRepository()

  const [uid, setUid] = React.useState<string | null>(null)
  const [likedId, setLikedId] = React.useState<string | null>(null)
  const [count, setCount] = React.useState<number | null>(null)

  let isLoading: boolean = false

  React.useEffect(() => {
    if (!isClient) return

    isLoading = true

    const init = async () => {
      const { uid } = await _UserRepository.fetchUser()
      if (!uid) return

      setUid(uid)

      const likedId = await _LikeRepository.find({ uid, path })
      setLikedId(likedId)

      const count = await _LikeRepository.count({ path })
      setCount(count)

      isLoading = false
    }

    init()
  }, [])

  const add = async () => {
    if (!uid) return

    const likedId = await _LikeRepository.add({ uid, path })
    setLikedId(likedId)
    setCount((count ?? 0) + 1)
  }

  const remove = async () => {
    if (!likedId) return

    await _LikeRepository.remove(likedId)
    setLikedId(null)
    setCount((count ?? 0) - 1)
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
    count,
  }
}
