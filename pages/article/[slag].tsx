import * as React from 'react'

import { getArticles } from '~/utils/article'

type Props = {
  article: any
}
const Article: React.FC<Props> = ({ article }) => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: article.body,
        }}
      />
    </div>
  )
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
