import { NextPage } from 'next'

import { HomeTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

import { getArticlelist } from '~/lib/api'

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
  const articles = await getArticlelist({ page: 0 })

  return { props: { articles } }
}

export default Home
