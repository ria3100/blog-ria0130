import { NextPage } from 'next'

import { ProfileTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

const Profile: NextPage = () => {
  const meta = {
    title: 'Profile',
    description: 'プロフィール',
    og: { type: 'website', image: '', path: '/profile' },
  }

  return (
    <>
      <Meta {...meta} />
      <ProfileTemplate />
    </>
  )
}

export default Profile
