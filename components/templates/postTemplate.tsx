import * as React from 'react'

import { Navigation } from '~/components/organisms'

type Props = { title: string; contents: string }
const PostTemplate: React.FC<Props> = ({ title, contents }) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {title} / {contents}
    </div>
  )
}

export default PostTemplate
