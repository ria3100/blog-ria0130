import { NextPage } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from '~/pages/_error'

import { Article } from '~/ddd/domain/article/entity'
import { getArticle } from '~/lib/api'
import { ArticleTemplate } from '~/components/templates'

const Post: NextPage<{ article: Article }> = ({ article }) => {
  const router = useRouter()

  if (!router.isFallback && !article?.id) return <ErrorPage statusCode={404} />

  const meta = {
    title: article.title,
    tags: article.tags,
    publishedAt: article.publishedAt,
    description: article.description,
  }

  return (
    <>
      <ArticleTemplate meta={meta}>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </ArticleTemplate>
    </>
  )
}

export default Post

type StaticProps = { params: { slug: string } }
export const getStaticProps = async ({ params }: StaticProps) => {
  const article = await getArticle(params.slug)
  return { props: { article }, revalidate: 1 }
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
})
