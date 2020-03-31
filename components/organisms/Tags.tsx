import * as React from 'react'

const Tags: React.FC = () => {
  return (
    <div className="w-full block">
      <i className="fas fa-tags float-left"></i>
      <ul className="tags block float-left">
        <li>
          <div className="parent ml-2">
            <div className="child text-xs p-1">ボタン</div>
          </div>
        </li>
        <li>
          <div className="parent ml-2">
            <div className="child text-xs p-1">ボタン</div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Tags
