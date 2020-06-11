import * as React from 'react'

import { Tags } from '~/components/molecules'
import { Date } from '~/components/atoms'

import '~/styles/article.scss'

export const Content: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="bg-white rounded-lg overflow-hidden w-full shadow">
          <div
            style={{
              width: 200,
              marginLeft: -200,
            }}
          >
            foo
          </div>
          <div className="flex items-center justify-between flex-wrap pl-6 pb-4">
            {/* <div className="w-1/3 p-2">
            <div className="text-gray-700">
              <Date date={article.publishDate} />
            </div>
          </div> */}
            <div className="w-2/3">
              <Tags tags={article.tags} />
            </div>
          </div>
          <div className="articleBody">
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        </div>
      </div>
    </section>
  )
}
