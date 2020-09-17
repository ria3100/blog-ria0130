import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

const Post = ({ post, morePosts, preview }: any) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  console.log({ post, morePosts, preview })
  return (
    <div>
      <div
        // className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
    // <Layout preview={preview}>
    // {router.isFallback ? (
    //   <PostTitle>Loading…</PostTitle>
    // ) : (
    //   <>
    //     <article className="mb-32">
    //       <Head>
    //         <title>
    //           {post.title} | Next.js Blog Example with {CMS_NAME}
    //         </title>
    //         <meta property="og:image" content={post.ogImage.url} />
    //       </Head>
    //       <PostHeader
    //         title={post.title}
    //         coverImage={post.coverImage}
    //         date={post.date}
    //         author={post.author}
    //       />
    //       <PostBody content={post.content} />
    //     </article>
    //   </>
    // )}
    // </Layout>
  )
}

export default Post

export const getStaticProps = async ({ params }: any) => {
  const post = await getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
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
  const posts = await getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
