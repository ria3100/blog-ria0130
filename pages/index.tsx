import { NextPage } from 'next'

import { HomeTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'
import { getPostList } from '~/lib/api'

// import { getArticles } from '~/utils/article'

export const config = { amp: true }

type Props = { articles: ArticleListItem[] }
const Home: NextPage<Props> = ({ articles }) => {
  const meta = {
    title: '',
    description: 'Front-end Engineer.',
    og: {
      type: 'website',
      image: '',
      path: '',
    },
  }

  return (
    <>
      <Meta {...meta} />

      <HomeTemplate articles={articles} />
    </>
  )
}

export const getStaticProps = async () => {
  // const articles = await getArticles()
  // const articles: Article[] = []
  const articles: ArticleListItem[] = await getPostList()

  return { props: { articles } }
}

export default Home

// title: string
// tags: string[]
// publishDate: string
// formattedPublishDate: string
// modifiedDate: string
// formattedModifiedDate: string
// seoDescription: string
// exclude: boolean
// urlPath: string
// fullUrlPath: string
// canonicalUrl: string
// hideProgressBar: boolean
// name: string
// type: string
// secondsSinceEpoch: number

// id: 'afeowi8kmv',
// title: 'React 新しい状態管理ライブラリ Recoil の紹介',
// description: 'Facebook から Recoil がリリースされたので試してみる。',
// tags: [
//   { fieldId: 'tag', name: 'React' },
//   { fieldId: 'tag', name: 'Recoil' }
// ]
