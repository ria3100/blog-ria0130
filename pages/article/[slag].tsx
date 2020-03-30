import * as React from 'react'

import { getArticles } from '~/utils/article'
import { PostTemplate } from '~/components/templates'

import '../../css/article.css'

type Props = {
  article: any
}
const Article: React.FC<Props> = ({ article }) => {
  return <PostTemplate title={article.title} contents={article.body} />
}

export async function getStaticPaths() {
  const articles = await getArticles()

  const paths = articles.map((article: any) => `/article${article.urlPath}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const slag = params.slag
  const articles = await getArticles()

  const article = articles.find(
    (article: any) => article.urlPath === `/${slag}`
  )

  return { props: { article } }
}

export default Article
