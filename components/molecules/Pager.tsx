import * as React from 'react'
import Link from 'next/link'

type Props = { tag: string; page: number; hasPrev: boolean; hasNext: boolean }

export const Pager: React.FC<Props> = ({ tag, page, hasPrev, hasNext }) => {
  const Prev = () => (
    <Link href={`/articles/${tag}/${page - 1}`}>
      <a>Prev</a>
    </Link>
  )

  const Next = () => (
    <Link href={`/articles/${tag}/${page + 1}`}>
      <a>Next</a>
    </Link>
  )

  return (
    <div className="text-gray-700 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span>{hasPrev && <Prev />}</span>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {hasNext && <Next />}
        </span>
      </div>
    </div>
  )
}
