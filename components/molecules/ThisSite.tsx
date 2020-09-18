import * as React from 'react'

import { SectionTitle } from '~/components/atoms'

export const ThisSite: React.FC = () => {
  return (
    <section className="text-gray-700 body-font">
      <SectionTitle>This Site</SectionTitle>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="mb-4 px-4">
            <div className="h-full flex items-start">
              <div className="flex-grow pl-6">
                <p className="title-font text-l font-medium text-gray-900 mb-3">
                  Next.js / React / TypeScript
                </p>
                <p className="leading-relaxed mb-5">
                  Next.js で SSG
                  の機能を使ってすべてのページを静的ファイルで生成しています。
                  以前は Gatsby で構築していましたが、SSR / SSG の切り分けが
                  Next.js 9.3 からとても手軽に出来るようになったので Next.js
                  を採用しています。
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 px-4">
            <div className="h-full flex items-start">
              <div className="flex-grow pl-6">
                <p className="title-font text-l font-medium text-gray-900 mb-3">
                  Tailwind CSS
                </p>
                <p className="leading-relaxed mb-5">
                  ユーティリティファーストなCSSフレームワーク。 display: flex →
                  .flex
                  のように網羅的なユーティリティが揃っていて組み合わせて使う設計になっています。
                  コンポーネントの再利用でスタイルの詳細度が意図しない優先度になることを防げるのでモダンフロントエンドと相性がいいと感じています。ファイルサイズが大きいので使用されていないスタイルを削除する
                  PurgeCSS が必要。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
