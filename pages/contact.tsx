import { NextPage } from 'next'

import { ContactTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

const Contact: NextPage = () => {
  const meta = {
    title: 'Contact',
    description: 'お問い合わせ',
    og: { type: 'website', image: '', path: '/contact' },
  }

  return (
    <>
      <Meta {...meta} />
      <ContactTemplate />
    </>
  )
}

export default Contact
