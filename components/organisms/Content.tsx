import * as React from 'react'

import { Tags, ArticleFooter, ShareButtons } from '~/components/molecules'
import { Like } from '~/components/atoms'

import { useLike } from '~/hooks/like'

export const Content: React.FC<{ article: Article }> = ({ article }) => {
  const { liked, toggleLike } = useLike(article.fullUrlPath)

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
          <Like toggleLike={toggleLike} liked={liked} />
          <ShareButtons title={article.title} path={article.fullUrlPath} />
          <ArticleFooter />
        </div>
      </div>
    </section>
  )
}
