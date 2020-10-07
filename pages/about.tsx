import { NextPage } from 'next'

import { AboutTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

const About: NextPage = () => {
  const meta = {
    title: 'About',
    description: 'このサイトを支える技術',
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
