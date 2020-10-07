import Link from 'next/link'

export const Navigation: React.FC = () => {
  return (
    <div>
      <header className="text-gray-400 body-font z-20 bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-2 lg:p-5 flex-row md:flex-row items-center">
          {/* left */}
          <nav className="flex w-1/3 flex-wrap items-center text-base md:ml-auto">
            {/* <ul>
              <li className="mr-3">
                <span className="inline-block py-2 px-4 text-gray-400">
                  <a
                    className="ml-3 hover:text-gray-200"
                    href="https://twitter.com/_ria0130"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="ml-3 hover:text-gray-200"
                    href="https://github.com/ria3100"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="github"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </span>
              </li>
            </ul> */}
          </nav>

          {/* center */}
          <Link href="/">
            <a className="flex w-1/3 title-font font-medium items-center text-gray-900 justify-center">
              <img
                src="/icons/logo.svg"
                className="w-10 h-10"
                alt="site logo"
                width="40"
                height="40"
              />
            </a>
          </Link>

          {/* right */}
          <div className="flex w-1/3 justify-end">
            <div className="hidden md:hidden lg:block">
              <Link href="/profile/">
                <a className="mr-5 hover:text-gray-200">Profile</a>
              </Link>
              <Link href="/about/">
                <a className="mr-5 hover:text-gray-200">About</a>
              </Link>
              <Link href="/contact/">
                <a className="mr-5 hover:text-gray-200">Contact</a>
              </Link>
            </div>

            <a
              data-amp-bind-class="isOpen ? 'fas fa-times cursor-pointer md:block lg:hidden' : 'fas fa-bars cursor-pointer md:block lg:hidden'"
              className="fas fa-bars cursor-pointer md:block lg:hidden"
              on="tap:AMP.setState({ isOpen: !isOpen })"
            />
          </div>
        </div>
        {/* menu */}
        <div className="z-10 absolute w-full top-56px bg-white opacity-95 overflow-hidden shadow-md">
          <div
            data-amp-bind-class="isOpen ? 'h-400px transition-all duration-500 ease-in-out' : 'h-0 transition-all duration-500 ease-in-out'"
            className="h-0 transition-all duration-500 ease-in-out"
          >
            <div
              data-amp-bind-class="isOpen ? 'block w-3/5 mx-auto pt-8 opacity-100 transition-all duration-300 ease-in-out' : 'block w-3/5 mx-auto pt-8 opacity-0 transition-all duration-300 ease-in-out'"
              className="block w-3/5 mx-auto pt-8 opacity-0 transition-all duration-300 ease-in-out"
            >
              <Link href="/profile/">
                <a className="text-center block mb-8 text-2xl text-gray-900 border-b">
                  <p className="text-2xl text-gray-900">Profile</p>
                  <p className="text-sm text-gray-900">プロフィール</p>
                </a>
              </Link>
            </div>
            <div
              data-amp-bind-class="isOpen ? 'block w-3/5 mx-auto opacity-100 transition-all duration-300 ease-in-out' : 'block w-3/5 mx-auto opacity-0 transition-all duration-300 ease-in-out'"
              className="block w-3/5 mx-auto opacity-0 transition-all duration-300 ease-in-out"
            >
              <Link href="/about/">
                <a className="text-center block mb-8 text-2xl text-gray-900 border-b">
                  <p className="text-2xl text-gray-900">About</p>
                  <p className="text-sm text-gray-900">
                    このサイトを支える技術
                  </p>
                </a>
              </Link>
            </div>
            <div
              data-amp-bind-class="isOpen ? 'block w-3/5 mx-auto opacity-100 transition-all duration-300 ease-in-out' : 'block w-3/5 mx-auto opacity-0 transition-all duration-300 ease-in-out'"
              className="block w-3/5 mx-auto opacity-0 transition-all duration-300 ease-in-out"
            >
              <Link href="/contact/">
                <a className="text-center block mb-8 border-b">
                  <p className="text-2xl text-gray-900">Contact</p>
                  <p className="text-sm text-gray-900">お問い合わせ</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
