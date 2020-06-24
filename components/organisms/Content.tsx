import * as React from 'react'

import { ArticleFooter } from '~/components/organisms'
import { Tags } from '~/components/molecules'

export const Content: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="bg-white rounded-lg overflow-hidden w-full shadow">
          <div className="flex items-center justify-between flex-wrap pl-6 pb-4">
            <div className="my-6">
              <Tags tags={article.tags} />
            </div>
          </div>

          <div className="articleBody leading-relaxed pb-8">
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>

          <ArticleFooter title={article.title} path={article.fullUrlPath} />
        </div>
      </div>
    </section>
  )
}
