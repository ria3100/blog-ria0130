import * as React from 'react'

import { useLike } from '~/hooks/like'

type Props = { path: string }

export const Like: React.FC<Props> = ({ path }) => {
  const { count, liked, toggleLike } = useLike(path)

  const iconClass = {
    off: 'far fa-heart',
    on: 'fas fa-heart',
  }

  return (
    <>
      <button
        onClick={() => toggleLike()}
        className="bg-white text-red-600 py-1 px-2 border border-red-500 hover:text-red-700 hover:border-red-600 rounded mr-4"
      >
        <i className={`${liked ? iconClass.on : iconClass.off} mr-2`} />
        {count && count.toLocaleString()}
      </button>
    </>
  )
}
