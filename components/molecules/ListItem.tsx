import * as React from 'react'
import Link from 'next/link'

import { Tags } from '~/components/molecules'
import { Date } from '~/components/atoms'

type Props = { article: Article }
const ListItem: React.FC<Props> = ({ article }) => {
  return (
    <div className="rounded shadow bg-white mb-8">
      <div className="px-6 py-4">
        <div className="mb-4">
          <div>
            <Link href={article.fullUrlPath}>
              <a className="font-bold  text-xl">{article.title}</a>
            </Link>
          </div>
          <div>
            <span className="text-gray-400 text-sm">
              <Date date={article.publishDate} />
            </span>
          </div>
        </div>
        <div className="mb-4">
          <p>{article.seoDescription}</p>
        </div>
        <Tags tags={article.tags} />
      </div>
    </div>
  )
}

export default ListItem
