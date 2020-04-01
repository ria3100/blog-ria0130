import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import { getArticles, getArticle } from '~/utils/article'
import { PostTemplate } from '~/components/templates'

type Props = { article: Article }
const Article: React.FC<Props> = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PostTemplate article={article} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles()

  const paths = articles.map((article: any) => `/article${article.urlPath}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const name = (params.slag as string).replace('/', '')

  const article = await getArticle(name)

  return { props: { article } }
}

export default Article
