import * as React from 'react'

const Navigation: React.FC = () => {
  return (
    <ul className="flex justify-between bg-gray-900 shadow-xl">
      <li className="mr-3">
        <span className="inline-block py-2 px-4 text-gray-400">
          Active Pills
        </span>
      </li>
      <li className="mr-3">
        <span className="inline-block py-2 px-4 text-gray-400">Ria</span>
      </li>
      <li className="mr-3">
        <span className="inline-block py-2 px-4 text-gray-400">
          Disabled Pill
        </span>
      </li>
    </ul>
  )
}

export default Navigation
