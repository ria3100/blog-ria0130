import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { getArticles, getArticle } from '~/utils/article'

import { ArticleTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

export const config = { amp: true }

type Props = { article: Article }
const Article: React.FC<Props> = ({ article }) => {
  const image = `https://res.cloudinary.com/dvtfyasu2/image/upload/l_text:Sawarabi%20Gothic_50:${article.title},co_rgb:f1f2ef,w_600,c_fit/v1592397543/article_card.png`

  const meta = {
    title: article.title,
    description: article.seoDescription,
    og: {
      type: 'article',
      image,
      path: `/article/${article.fullUrlPath}`,
    },
    keywords: article.tags,
  }

  return (
    <>
      <Meta {...meta} />
      <ArticleTemplate article={article} />
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
