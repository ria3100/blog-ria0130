import { firebase } from '~/lib/firebase'

import { IUserRepository } from '~/repository/user/IUserRepository'
import type { User } from '~/repository/user/IUserRepository'

export class UserRepository extends IUserRepository {
  public constructor() {
    super()
  }

  public fetchUser() {
    return new Promise<User>(resolve => {
      firebase.auth().onAuthStateChanged(user => {
        resolve({ uid: user?.uid || null })
      })
    })
  }
}
