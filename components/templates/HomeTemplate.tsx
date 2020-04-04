import * as React from 'react'
import Link from 'next/link'

import { Navigation, Mainvisual, List, Footer } from '~/components/organisms'
import { AnimatedRoute } from '~/components/atoms'

type Props = { articles: Article[] }
const HomeTemplate: React.FC<Props> = ({ articles }) => {
  return (
    <AnimatedRoute>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <Mainvisual />

        <List articles={articles} />
      </div>
      <Footer />
    </AnimatedRoute>
  )
}

export default HomeTemplate
