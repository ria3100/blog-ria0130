import * as React from 'react'

type Props = { date: string }
const Date: React.FC<Props> = ({ date }) => {
  return (
    <>
      <i className="far fa-clock mr-1" />
      {date}
    </>
  )
}

export default Date
