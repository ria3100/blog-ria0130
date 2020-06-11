import * as React from 'react'

type Props = { filename: string }
export const NamedCodeBlock: React.FC<Props> = ({ filename, children }) => {
  return (
    <div>
      <div className="px-4">{filename}</div>
      {children}
    </div>
  )
}
