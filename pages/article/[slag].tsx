import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { getArticles, getArticle } from '~/utils/article'
import { PostTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

type Props = { article: Article }
const Article: React.FC<Props> = ({ article }) => {
  const meta = {
    title: article.title,
    og: { image: '', url: article.title },
    keywords: article.tags,
  }

  return (
    <>
      <Meta {...meta} />
      <PostTemplate article={article} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles()

  const paths = articles.map((article: Article) => article.fullUrlPath)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const name = (params.slag as string).replace('/', '')

  const article = await getArticle(name)

  return { props: { article } }
}

export default Article
