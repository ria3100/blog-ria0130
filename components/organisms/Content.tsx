import * as React from 'react'

import '~/style/article.scss'

const Content: React.FC<{ contents: string }> = ({ contents }) => {
  return (
    <div className="flex justify-center">
      <div
        className="bg-white rounded-lg overflow-hidden w-3/4 mb-32 shadow"
        style={{ height: 3000 }}
      >
        <div className="articleBody">
          <div dangerouslySetInnerHTML={{ __html: contents }} />
        </div>
      </div>
    </div>
  )
}

export default Content
