import * as React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="text-gray-700 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 hover:text-gray-700">
            <img src="/icons/logo.svg" className="w-10 h-10" />
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
            <i className="fab fa-twitter" />
          </a>
          <a
            className="ml-3 text-gray-500 hover:text-gray-700"
            href="https://github.com/ria3100"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>
        </span>
      </div>
    </footer>
  )
}
