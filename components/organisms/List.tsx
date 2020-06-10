import * as React from 'react'

import { ListItem } from '~/components/molecules'

type Props = { articles: Article[] }
const List: React.FC<Props> = ({ articles }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="flex flex-col mx-auto w-full my-16">
          {articles.map((article, i) => (
            <ListItem article={article} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default List
