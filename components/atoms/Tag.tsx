import * as React from 'react'

const Tag: React.FC = ({ children }) => {
  return (
    <div className="bg-dance-to-forget p-1px ml-2 rounded-3px">
      <div className="bg-white text-center text-xs p-1 rounded-2px">
        {children}
      </div>
    </div>
  )
}

export default Tag
