import * as React from 'react'

import { Navigation, Footer, Profile, SkilList } from '~/components/organisms'
import { AnimatedRoute } from '~/components/atoms'

const PostTemplate: React.FC = () => {
  return (
    <AnimatedRoute>
      <div className="flex flex-col min-h-screen">
        <Navigation />

        <Profile />
        <SkilList />
      </div>
      <Footer />
    </AnimatedRoute>
  )
}

export default PostTemplate
