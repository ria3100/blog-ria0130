import * as React from 'react'

type Props = {
  title: string
  path: string
}

export const ShareButtons: React.FC<Props> = ({ title, path }) => {
  const url = 'https://' + process.env.NEXT_PUBLIC_HOST + path
  const twitterId: string = '_Ria0130'

  return (
    <>
      <a
        href={`https://twitter.com/share?url=${url}&via=${twitterId}&related=${twitterId}&text=${title}`}
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-4"
          aria-label="shate twitter"
        >
          <i className="fab fa-twitter" />
        </button>
      </a>

      <a
        href={`http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`}
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-4 rounded mr-4"
          aria-label="shate hatena"
        >
          <i className="fab fa-hatena" />
        </button>
      </a>
    </>
  )
}
