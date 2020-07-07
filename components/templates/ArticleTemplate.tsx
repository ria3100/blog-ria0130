import * as React from 'react'

import { Navigation, Title, Content, Footer } from '~/components/organisms'
import { Meta, AnimatedRoute } from '~/components/atoms'

type Props = { meta: any }

export const ArticleTemplate: React.FC<Props> = ({ children, meta }) => {
  const metadata = {
    ...meta,
    og: {
      type: 'article',
      image: `https://res.cloudinary.com/dvtfyasu2/image/upload/l_text:Sawarabi%20Gothic_50:${meta.title},co_rgb:f1f2ef,w_600,c_fit/v1592397543/article_card.png`,
    },
  }

  return (
    <>
      <Meta {...metadata} />
      <AnimatedRoute>
        <div className="flex flex-col min-h-screen">
          <div className="relative">
            <div className="absolute w-full h-480px max-h-900 bg-gray-900 -z-1" />
            <div className="absolute w-full">
              <Navigation />
            </div>
            <Title title={meta.title} date={meta.publishDate} />
            <Content meta={meta}>{children}</Content>
          </div>
        </div>
        <Footer />
      </AnimatedRoute>
    </>
  )
}
