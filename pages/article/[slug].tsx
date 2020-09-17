import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '~/lib/api'
import markdownToHtml from '~/lib/markdownToHtml'
import { ArticleTemplate } from '~/components/templates'

const Post = ({ post }: any) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  // console.log(post)

  const meta = {
    title: post.title,
    tags: post.topics,
    publishDate: 'foo',
    modifiedDate: false,
    seoDescription: 'foo',
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
  const post = await getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

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
  const posts = await getAllPosts()

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
