import * as React from 'react'

import { ListTemplate } from '~/components/templates'

import { getArticles } from '~/utils/article'

type Props = { articles: any[] }
const List: React.FC<Props> = ({ articles }) => {
  return (
    <ListTemplate>
      {articles.map(item => (
        <div key={item.urlPath}>{item.title}</div>
      ))}
    </ListTemplate>
  )
}

export const getStaticProps = async () => {
  const articles = await getArticles()

  return { props: { articles } }
}

export default List
