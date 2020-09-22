import * as React from 'react'
import { useRouter } from 'next/router'

import { Navigation, List, Footer } from '~/components/organisms'
import { Pager } from '~/components/molecules'
import { AnimatedRoute } from '~/components/atoms'

type Props = { articles: Article[]; hasPrev: boolean; hasNext: boolean }

export const ListTemplate: React.FC<Props> = ({
  articles,
  hasPrev,
  hasNext,
}) => {
  const router = useRouter()
  const { tag, page } = router.query

  return (
    <AnimatedRoute>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <Navigation />
          <List articles={articles} />
          <Pager tag={tag} page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
      </div>
      <Footer />
    </AnimatedRoute>
  )
}
