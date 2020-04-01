import * as React from 'react'

import { getArticles } from '~/utils/article'

type Props = { articles: any[] }
const List: React.FC<Props> = ({ articles }) => {
  return (
    <>
      {articles.map(item => (
        <div key={item.urlPath}>{item.title}</div>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const articles = await getArticles()

  return { props: { articles } }
}

export default List
