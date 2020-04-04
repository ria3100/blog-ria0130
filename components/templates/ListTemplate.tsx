import * as React from 'react'

import { Navigation, List, Footer } from '~/components/organisms'
import { AnimatedRoute } from '~/components/atoms'

type Props = { articles: Article[] }
const PostTemplate: React.FC<Props> = ({ articles }) => {
  return (
    <AnimatedRoute>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <Navigation />
          <List articles={articles} />
        </div>
      </div>
      <Footer />
    </AnimatedRoute>
  )
}

export default PostTemplate
