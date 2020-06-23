import { firebase } from '~/lib/firebase'

import { ILikeRepository } from '~/repository/like/ILikeRepository'
import type { Like } from '~/repository/like/ILikeRepository'

export const collectionName = 'liked'

export class LikeRepository extends ILikeRepository {
  private store: ReturnType<typeof firebase.firestore>

  private likedId: string = ''
  private uid: string = ''

  public constructor(path: string) {
    super()
    this.store = firebase.firestore()

    // return new Promise(async (resolve) => {
    const isClient = typeof window !== 'undefined'

    if (!isClient) return

    (async () => {
      this.uid = await this.fetchUid() + ''
      if (!this.uid) return

      this.likedId = await (await this.find(path)).likedId

    })()

  }

  private fetchUid() {
    return new Promise<string|null>((resolve) => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(user?.uid)
      })
    })
  }

  // FIXME: Repository に状態を持たせず Hooks で吸収する
  public async find(path: string) {
    return new Promise<Like>((resolve) => {
      this.store
        .collection(collectionName)
        .where('uid', '==', this.uid)
        .where('path', '==', path)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            resolve({ likedId: doc.id })
          })
        })
    })
  }

  public add(path: string) {
    const date = new Date()
    const createdAt = date.getTime() + ''

    const current = { id: this.uid, path, createdAt }

    return new Promise<Like>((resolve, reject) => {
      this.store
        .collection(collectionName)
        .add(current)
        .then((docRef) =>
          resolve({likedId:docRef.id})
        )
        .catch((error) => {
          reject('Error adding document: ' + error)
        })
    })
  }

  public remove() {
    return new Promise<Pick<Like, 'likedId'>>((resolve, reject) => {
      this.store
        .collection(collectionName)
        .doc(this.likedId)
        .delete()
        .then(() => resolve({likedId:this.likedId}))
        .catch((error) => {
          reject('Error removing document: ' + error)
        })
    })
  }
}

