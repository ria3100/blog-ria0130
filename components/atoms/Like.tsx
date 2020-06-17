import * as React from 'react'

type Props = {
  toggleLike: () => void
  liked: boolean
}

export const Like: React.FC<Props> = ({ toggleLike, liked }) => {
  return (
    <>
      <div
        onClick={() => toggleLike()}
        className="cursor-pointer text-red-500 font-bold py-2 px-4 rounded text-4xl"
      >
        {liked ? (
          <i className="fas fa-heart" />
        ) : (
          <i className="far fa-heart" />
        )}
      </div>
    </>
  )
}
