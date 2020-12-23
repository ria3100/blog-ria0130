type Params = {
  id: string
  name: string
}

export class Tag {
  public readonly id: string
  public readonly name: string

  public constructor(params: Params) {
    this.id = params.id
    this.name = params.name
  }
}
