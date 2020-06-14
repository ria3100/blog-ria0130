import { NextPage } from 'next'

import { AboutTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

const About: NextPage = () => {
  const meta = {
    title: 'About',
    og: { type: 'website', image: '', path: '/about', description: '' },
  }

  return (
    <>
      <Meta {...meta} />
      <AboutTemplate />
    </>
  )
}

export default About
