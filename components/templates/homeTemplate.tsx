import * as React from 'react'

import { Navigation, Mainvisual, Foo, Footer } from '~/components/organisms'

const HomeTemplate = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <Mainvisual />
        <div className="my-16 mx-32">
          <Foo />
          <div className="w-full flex m-8 ">
            <div
              className="h-48 w-48 bg-cover rounded-l-lg text-center overflow-hidden"
              style={{
                backgroundImage: `url('https://tailwindcss.com/img/card-top.jpg')`,
              }}
              title="Woman holding a mug"
            ></div>
            <div className="w-auto border-r border-b border-t border-gray-200 rounded-r-lg bg-white p-4 flex flex-col justify-between">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomeTemplate
