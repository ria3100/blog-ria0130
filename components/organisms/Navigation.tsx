import * as React from 'react'

const Navigation: React.FC = () => {
  return (
    <ul className="flex justify-between bg-gray-900">
      <li className="mr-3">
        <span className="inline-block py-2 px-4 ">Active Pill</span>
      </li>
      <li className="mr-3">
        <span className="inline-block text-blue-500 py-2 px-4">Pill</span>
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
