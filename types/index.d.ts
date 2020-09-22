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
  id: string
  title: string
  tags: string[]
  publishedAt: string
  description: string
  body: string
}

type ArticleListItem = Omit<Article, 'markdown'>
