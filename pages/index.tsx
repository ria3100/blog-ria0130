import { NextPage } from 'next'

import { HomeTemplate } from '~/components/templates'
import { getArticles } from '~/utils/article'

type Props = { articles: Article[] }
const Home: NextPage<Props> = ({ articles }) => {
  return <HomeTemplate articles={articles} />
}

export const getStaticProps = async () => {
  const articles = await getArticles()

  return { props: { articles } }
}

export default Home
