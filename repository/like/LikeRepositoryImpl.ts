import { firebase } from '~/lib/firebase'

import { ILikeRepository } from '~/repository/like/ILikeRepository'
import type { Like, LikedId } from '~/repository/like/ILikeRepository'

export const collectionName = 'liked'

export class LikeRepository extends ILikeRepository {
  public constructor() {
    super()
  }

  public find({ uid, path }: Pick<Like, 'uid'|'path'>) {
    return new Promise<LikedId>(resolve => {
      firebase.firestore()
        .collection(collectionName)
        .where('uid', '==', uid)
        .where('path', '==', path)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            resolve(doc.id)
          })
        })
    })
  }

  public add({ uid, path }: Pick<Like, 'uid'|'path'>) {
    const date = new Date()
    const createdAt = date.getTime() + ''

    const current: Like = { uid, path, createdAt }

    return new Promise<LikedId>((resolve, reject) => {
      firebase.firestore()
        .collection(collectionName)
        .add(current)
        .then(docRef => resolve(docRef.id))
        .catch(error => {
          reject('Error adding document: ' + error)
        })
    })
  }

  public remove(likedId: LikedId) {
    return new Promise<LikedId>((resolve, reject) => {
      firebase.firestore()
        .collection(collectionName)
        .doc(likedId)
        .delete()
        .then(() => resolve(likedId))
        .catch(error => {
          reject('Error removing document: ' + error)
        })
    })
  }
}
