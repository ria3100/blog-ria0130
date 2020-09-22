import * as React from 'react'

import { Navigation, Mainvisual, List, Footer } from '~/components/organisms'

type Props = { articles: ArticleListItem[] }

export const HomeTemplate: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="absolute w-full">
          <Navigation />
        </div>

        <Mainvisual />

        <List articles={articles} />
      </div>
      <Footer />
    </>
  )
}
