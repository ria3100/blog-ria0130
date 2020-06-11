import * as React from 'react'
import Link from 'next/link'

import { SectionTitle } from '~/components/atoms'

export const Profile: React.FC = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <SectionTitle>Profile</SectionTitle>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  className="rounded-full"
                  src="https://pbs.twimg.com/profile_images/1222177937182482433/aS6hxN-R_400x400.jpg"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Ria
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-gray-600">Front-end Engineer.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Meggings portland fingerstache lyft, post-ironic fixie man bun
                banh mi umami everyday carry hexagon locavore direct trade art
                party. Locavore small batch listicle gastropub farm-to-table
                lumbersexual salvia messenger bag. Coloring book flannel
                truffaut craft beer drinking vinegar sartorial, disrupt fashion
                axe normcore meh butcher. Portland 90's scenester vexillologist
                forage post-ironic asymmetrical, chartreuse disrupt butcher
                paleo intelligentsia pabst before they sold out four loko. 3
                wolf moon brooklyn.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
