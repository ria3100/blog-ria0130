import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPostSlugs } from '~/lib/api'
import markdownToHtml from '~/lib/markdownToHtml'
import { ArticleTemplate } from '~/components/templates'

export const config = { amp: true }

const Post = ({ post }: any) => {
  const router = useRouter()
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }

  const meta = {
    title: post.title,
    tags: post.tags,
    publishedAt: post.publishedAt,
    description: post.description,
  }

  return (
    <div>
      <ArticleTemplate meta={meta}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </ArticleTemplate>
    </div>
  )
}

export default Post

export const getStaticProps = async ({ params }: any) => {
  const posts = await getPostBySlug([params.slug])
  const post = posts[0]
  const content = await markdownToHtml(post.markdown || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostSlugs()
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}
