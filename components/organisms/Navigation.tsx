import * as React from 'react'
import Link from 'next/link'

export const Navigation: React.FC = () => {
  return (
    <header className="text-gray-400 body-font z-10 bg-gray-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/">
            <a className="mr-5 hover:text-gray-200">Home</a>
          </Link>
          <Link href="/about/">
            <a className="mr-5 hover:text-gray-200">About</a>
          </Link>
        </nav>

        <Link href="/">
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:justify-center mb-4 md:mb-0">
            <img src="/icons/logo.svg" className="w-10 h-10" />
          </a>
        </Link>

        <div className="lg:w-2/5 lg:justify-end ml-5 lg:ml-0 hidden lg:inline-flex">
          <ul>
            <li className="mr-3">
              <span className="inline-block py-2 px-4 text-gray-400">
                <a
                  className="ml-3 hover:text-gray-200"
                  href="https://twitter.com/_ria0130"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="ml-3 hover:text-gray-200"
                  href="https://github.com/ria3100"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
