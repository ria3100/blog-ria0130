import * as React from 'react'

import { SectionTitle } from '~/components/atoms'

export const Contact: React.FC = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <SectionTitle>Contact</SectionTitle>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            お問い合わせ、ご依頼等もしございましたら{' '}
            <a
              href="https://twitter.com/_Ria0130"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{' '}
            の DM までお願いします。
          </p>
        </div>
      </div>
    </section>
  )
}
