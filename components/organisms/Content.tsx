import * as React from 'react'

import { ArticleFooter } from '~/components/organisms'
import { Tags } from '~/components/molecules'

export const Content: React.FC<{ meta: any }> = ({ children, meta }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="bg-white rounded-lg overflow-hidden w-full shadow">
          <div className="flex items-center justify-between flex-wrap pl-6 pb-4">
            <div className="my-6">
              <Tags tags={meta.tags} />
            </div>
          </div>

          <div className="articleBody leading-relaxed pb-8">
            {/* <div dangerouslySetInnerHTML={{ __html: article.body }} /> */}
            {children}
          </div>

          <ArticleFooter title={meta.title} path={meta.fullUrlPath} />
        </div>
      </div>
    </section>
  )
}
