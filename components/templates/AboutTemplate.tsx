import * as React from 'react'

import { Navigation, Footer } from '~/components/organisms'
import { AnimatedRoute } from '~/components/atoms'

const PostTemplate: React.FC = () => {
  return (
    <AnimatedRoute>
      <div className="flex flex-col min-h-screen">
        <div className="relative">
          <div className="absolute w-full h-40vh max-h-900 bg-gray-900 -z-1" />
          <Navigation />
        </div>
      </div>
      <Footer />
    </AnimatedRoute>
  )
}

export default PostTemplate
