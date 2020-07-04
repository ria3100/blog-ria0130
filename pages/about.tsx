import { NextPage } from 'next'

import { AboutTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

export const config = { amp: true }

const About: NextPage = () => {
  const meta = {
    title: 'About',
    description: 'このサイトについて',
    og: { type: 'website', image: '', path: '/about' },
  }

  return (
    <>
      <Meta {...meta} />
      <AboutTemplate />
    </>
  )
}

export default About
