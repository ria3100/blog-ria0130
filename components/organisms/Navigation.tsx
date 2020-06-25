import * as React from 'react'
import Link from 'next/link'

export const Navigation: React.FC = () => {
  return (
    <header className="text-gray-400 body-font z-10 bg-gray-900">
      <div className="container mx-auto flex flex-wrap p-2 md:p-5 flex-row md:flex-row items-center">
        {/* left */}
        <nav className="flex w-1/3 flex-wrap items-center text-base md:ml-auto">
          <div className="hidden md:block">
            <Link href="/">
              <a className="mr-5 hover:text-gray-200">Home</a>
            </Link>
            <Link href="/about/">
              <a className="mr-5 hover:text-gray-200">About</a>
            </Link>
          </div>
        </nav>

        {/* center */}
        <Link href="/">
          <a className="flex w-1/3 title-font font-medium items-center text-gray-900 justify-center">
            {/* <img src="/icons/logo.svg" className="w-10 h-10" alt="site logo" /> */}
          </a>
        </Link>

        {/* right */}
        <div className="flex w-1/3 justify-end">
          <ul className="hidden md:block">
            <li className="mr-3">
              <span className="inline-block py-2 px-4 text-gray-400">
                <a
                  className="ml-3 hover:text-gray-200"
                  href="https://twitter.com/_ria0130"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="ml-3 hover:text-gray-200"
                  href="https://github.com/ria3100"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </span>
            </li>
          </ul>

          <Link href="/about/">
            <a className="flex md:hidden mr-5 hover:text-gray-200">About</a>
          </Link>
        </div>
      </div>
    </header>
  )
}
