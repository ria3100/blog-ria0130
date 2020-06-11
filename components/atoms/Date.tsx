import * as React from 'react'

type Props = { date: string }

export const Date: React.FC<Props> = ({ date }) => {
  return (
    <>
      <i className="far fa-clock mr-1" />
      {date}
    </>
  )
}
