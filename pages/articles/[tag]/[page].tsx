import { NextPage } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from '~/pages/_error'

import { getArticleSlugs, getArticlelist, getTaglist } from '~/lib/api'
import { ListTemplate } from '~/components/templates'

type Props = { articleList: Article[]; hasPrev: boolean; hasNext: boolean }
const Post: NextPage<Props> = ({ articleList, hasPrev, hasNext }) => {
  const router = useRouter()

  if (!router.isFallback && !articleList) return <ErrorPage statusCode={404} />

  return (
    <>
      <ListTemplate
        articles={articleList}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
    </>
  )
}

export default Post

type StaticProps = { params: { tag: string; page: string } }
export const getStaticProps = async ({ params }: StaticProps) => {
  const tagList = await getTaglist()
  const tagId = tagList.find(
    (current) => current.name.toLowerCase() === decodeURI(params.tag)
  )?.id

  const articleList = await getArticlelist({ tagId })

  const slugs = await getArticleSlugs({ tagId })
  const pageNum = Math.ceil(slugs.length / 10)

  const hasPrev = +params.page > 1
  const hasNext = +params.page < pageNum

  return {
    props: { articleList, hasNext, hasPrev },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
})
