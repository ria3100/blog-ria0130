import * as React from 'react'

import { ListItem } from '~/components/molecules'

type Props = { articles: Article[] }
const List: React.FC<Props> = ({ articles }) => {
  return (
    <div className="flex flex-col mx-auto w-3/4 my-16">
      {articles.map((article, i) => (
        <ListItem article={article} key={i} />
      ))}
    </div>
  )
}

export default List
