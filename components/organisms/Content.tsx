import * as React from 'react'

const Content: React.FC<{ contents: string }> = ({ contents }) => {
  return (
    <div className="flex justify-center">
      <div
        className="bg-white rounded-lg overflow-hidden w-3/4 mb-32 shadow"
        style={{ height: 3000 }}
      >
        <div className="px-6 py-8">
          <div dangerouslySetInnerHTML={{ __html: contents }} />
        </div>
      </div>
    </div>
  )
}

export default Content
