import * as React from 'react'

import { Tags } from '~/components/organisms'

import '~/styles/article.scss'

const Content: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="flex justify-center">
      <div
        className="bg-white rounded-lg overflow-hidden w-3/4 mb-32 shadow"
        style={{ height: 2000 }}
      >
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-1/3 p-2">
            <div className="text-gray-700">
              <i className="far fa-clock" />
              {article.publishDate}
            </div>
          </div>
          <div className="w-1/3 p-2">
            <Tags />
          </div>
        </div>
        <div className="articleBody">
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      </div>
    </div>
  )
}

export default Content
