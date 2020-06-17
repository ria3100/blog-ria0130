import * as React from 'react'

type Props = {
  title: string
  path: string
}

export const ShareButtons: React.FC<Props> = ({ title, path }) => {
  const url = 'https://' + process.env.NEXT_PUBLIC_HOST + path
  const twitterId = '_Ria0130'

  return (
    <div className="px-4 mb-8">
      <a
        href={`https://twitter.com/share?url=${url}&via=${twitterId}&related=${twitterId}&text=${title}`}
        rel="nofollow"
        target="_blank"
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          <i className="fab fa-twitter" />
        </button>
      </a>

      <a
        href={`http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`}
        target="_blank"
        rel="nofollow"
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          <i className="fab fa-hatena" />
        </button>
      </a>
    </div>
  )
}
