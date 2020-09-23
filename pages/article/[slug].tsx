import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { Article } from '~/ddd/domain/article/entity'
import { getArticleSlugs, getArticle } from '~/lib/api'
import { ArticleTemplate } from '~/components/templates'

export const config = { amp: true }

const Post = ({ article }: { article: Article }) => {
  const router = useRouter()

  if (!router.isFallback && !article?.id) {
    return <ErrorPage statusCode={404} />
  }

  const meta = {
    title: article.title,
    tags: article.tags,
    publishedAt: article.publishedAt,
    description: article.description,
  }

  return (
    <div>
      <ArticleTemplate meta={meta}>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </ArticleTemplate>
    </div>
  )
}

export default Post

type StaticProps = { params: { slug: string } }
export const getStaticProps = async ({ params }: StaticProps) => {
  const article = await getArticle(params.slug)

  return { props: { article } }
}

export const getStaticPaths = async () => {
  const slugs = await getArticleSlugs()
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}