import * as React from 'react'

const Navigation: React.FC = () => {
  return (
    <ul className="flex justify-between bg-gray-900 shadow-xl">
      <li className="mr-3">
        <span className="inline-block py-2 px-4 text-gray-400"></span>
      </li>
      <li className="mr-3">
        <span className="font-product-sans font-bold tracking-wide text-center text-gray-200 inline-block py-2 px-4">
          Ria
        </span>
      </li>
      <li className="mr-3">
        <span className="inline-block py-2 px-4 text-gray-400">
          <a className="ml-3" href="https://github.com/ria3100" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            className="ml-3"
            href="https://twitter.com/_ria0130"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </span>
      </li>
    </ul>
  )
}

export default Navigation
