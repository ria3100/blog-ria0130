import * as React from 'react'

import { Navigation, Title, Content, Footer } from '~/components/organisms'

type Props = { article: Article }
const PostTemplate: React.FC<Props> = ({ article }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="relative">
          <div className="absolute w-full h-40vh max-h-900 bg-gray-900 -z-1" />
          <Navigation />
          <Title title={article.title} date={article.publishDate} />
          <Content article={article} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PostTemplate
