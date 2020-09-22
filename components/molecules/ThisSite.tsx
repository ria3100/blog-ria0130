import * as React from 'react'

import { SectionTitle } from '~/components/atoms'

export const ThisSite: React.FC = () => {
  return (
    <section className="text-gray-700 body-font">
      <SectionTitle>このサイトを支える技術</SectionTitle>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="mb-8 px-8 w-full">
            <div className="h-full flex items-start">
              <div className="flex-grow pl-6">
                <p className="title-font text-l font-medium text-gray-900 mb-4">
                  フロントエンド: Next.js / React
                </p>
                <p className="leading-relaxed mb-8">
                  Next.js で SSG
                  の機能を使ってすべてのページを静的ファイルで生成しています。
                  fullAMP や PWA
                  にも対応していてページの表示速度に貢献しています。
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 px-8 w-full">
            <div className="h-full flex items-start">
              <div className="flex-grow pl-6">
                <p className="title-font text-l font-medium text-gray-900 mb-4">
                  スタイル: Tailwind CSS
                </p>
                <p className="leading-relaxed mb-8">
                  ユーティリティファーストなCSSフレームワーク。 display: flex →
                  .flex
                  のように網羅的なユーティリティが揃っていて組み合わせて使う設計になっています。
                  コンポーネントの再利用でスタイルの詳細度が意図しない優先度になることを防げるのでモダンフロントエンドと相性がいいと感じています。ファイルサイズが大きいので使用されていないスタイルを削除する
                  PurgeCSS が必要。
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 px-8 w-full">
            <div className="h-full flex items-start">
              <div className="flex-grow pl-6">
                <p className="title-font text-l font-medium text-gray-900 mb-4">
                  デプロイ環境: Vercel
                </p>
                <p className="leading-relaxed mb-8">
                  このサイトでは Vercel にデプロイされています。Next.js
                  との相性の良さや設定の手軽さ、記事更新時の再ビルド/デプロイが簡単にできます。
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 px-8 w-full">
            <div className="h-full flex items-start">
              <div className="flex-grow pl-6">
                <p className="title-font text-l font-medium text-gray-900 mb-4">
                  コンテンツ管理: Zenn / microCMS
                </p>
                <p className="leading-relaxed mb-8">
                  このサイトでは Zenn と記事を共有しています。 Zenn の記事は
                  zenn-cli を使って GitHub の zenn-contents
                  リポジトリで管理していて GitHub Actions を使って microCMS
                  に同じ内容を保存しています。 このサイトはその microCMS
                  から記事を取得して構築されていています。 Markdown
                  ファイルを共有してもよかったのですが microCMS を挟むことで
                  Jamstack
                  の知見を積むことや記事一覧などのデータ取得が容易になりました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
