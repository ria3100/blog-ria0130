export type User = {
  uid: string | null
}

export abstract class IUserRepository {
  abstract async fetchUser(): Promise<User>
}
