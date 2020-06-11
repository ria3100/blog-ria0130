import * as React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-700 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Ria.dev</span>
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <a
            href="https://twitter.com/_Ria0130"
            className="text-gray-600 ml-1 hover:text-gray-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            @_Ria0130
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="ml-3 text-gray-500 hover:text-gray-700"
            href="https://twitter.com/_ria0130"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="ml-3 text-gray-500 hover:text-gray-700"
            href="https://github.com/ria3100"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
