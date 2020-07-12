type Post = {
  title: string
  tag: string[]
  category: string
  createdAt: number
}

type MDXComponent = (props) => JSX.Element

type Meta = {
  title: string
  tags: string[]
  publishDate: string
  modifiedDate: string
  seoDescription: string
  hideProgressBar: boolean
  exclude: boolean
}

type Article = {
  title: string
  tags: string[]
  publishDate: string
  formattedPublishDate: string
  modifiedDate: string
  formattedModifiedDate: string
  seoDescription: string
  exclude: boolean
  urlPath: string
  fullUrlPath: string
  canonicalUrl: string
  hideProgressBar: boolean
  name: string
  type: string
  secondsSinceEpoch: number
}
