import * as React from 'react'

import { Navigation, Title, Content, Footer } from '~/components/organisms'

type Props = { title: string; contents: string }
const PostTemplate: React.FC<Props> = ({ title, contents }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="relative">
          <div className="absolute w-full h-30vh max-h-900 bg-gray-900 -z-1" />
          <Navigation />
          <Title title={title} />
          <Content contents={contents} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PostTemplate
