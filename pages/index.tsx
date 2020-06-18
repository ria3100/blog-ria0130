import { NextPage } from 'next'

import { HomeTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

import { getArticles } from '~/utils/article'

type Props = { articles: Article[] }
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
  const articles = await getArticles()

  return { props: { articles } }
}

export default Home
