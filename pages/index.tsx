import { NextPage } from 'next'

import { HomeTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

import { getArticles } from '~/utils/article'

type Props = { articles: Article[] }
const Home: NextPage<Props> = ({ articles }) => {
  const meta = {
    title: 'Ria',
    og: {
      type: 'website',
      image: '',
      path: '',
      description: 'Front-end Engineer.',
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
