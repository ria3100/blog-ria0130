import { getArticleSlugs, getArticlelist, getTaglist } from '~/lib/api'
import { ListTemplate } from '~/components/templates'

export const config = { amp: true }

type Props = { articleList: Article[]; hasPrev: boolean; hasNext: boolean }
const Post: React.FC<Props> = ({ articleList, hasPrev, hasNext }) => {
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

  return { props: { articleList, hasNext, hasPrev } }
}

export const getStaticPaths = async () => {
  const tags = await getTaglist()

  const pathItem = (tagName: string, slugs: string[]) => {
    const pageNum = Math.ceil(slugs.length / 10)

    return [...Array(pageNum).keys()].map((i) => ({
      params: {
        tag: encodeURI(tagName.toLowerCase()),
        page: i + 1 + '',
      },
    }))
  }

  // タグ指定
  const tmp = await Promise.all(
    tags.map(async (tag) => {
      const slugs = await getArticleSlugs({ tagId: tag.id })
      return pathItem(tag.name, slugs)
    })
  )

  // 全件
  const slugs = await getArticleSlugs()
  tmp.push(pathItem('all', slugs))

  const paths = tmp.flat()

  return {
    paths,
    fallback: false,
  }
}
