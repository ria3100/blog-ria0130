import * as React from 'react'

import { Navigation, Footer, SkilList } from '~/components/organisms'
import { Profile, ThisSite, Contact } from '~/components/molecules'
import { AnimatedRoute } from '~/components/atoms'

export const AboutTemplate: React.FC = () => {
  return (
    <AnimatedRoute>
      <div className="flex flex-col min-h-screen">
        <Navigation />

        <Profile />
        <SkilList />
        <ThisSite />
        <Contact />
      </div>
      <Footer />
    </AnimatedRoute>
  )
}
