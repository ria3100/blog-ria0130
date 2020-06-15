import * as React from 'react'

export const Tag: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-100 ml-2 rounded-3px text-center text-xs py-1 px-2">
      {children}
    </div>
  )
}
