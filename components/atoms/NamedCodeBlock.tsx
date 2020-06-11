import * as React from 'react'
// import { fetchFileIcon } from 'utils/fileIcons'

type Props = { filename: string }
export const NamedCodeBlock: React.FC<Props> = ({ filename, children }) => {
  // const fileIcon = fetchFileIcon(filename)

  return (
    <div>
      <div className="px-4">
        {/* {fileIcon && (
          <img
            className="w-4 mr-1 mt-1 float-left"
            src={`/material-icons/${fileIcon}.svg`}
          />
        )} */}
        {filename}
      </div>
      {children}
    </div>
  )
}
