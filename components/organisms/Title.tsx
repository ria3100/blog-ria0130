import * as React from 'react'

type Props = { title: string; date: string }
const Title: React.FC<Props> = ({ title, date }) => {
  return (
    <div className="flex flex-col justify-center h-40vh-80px w-full">
      <h1 className="font-product-sans font-bold text-4xl tracking-wide text-center text-gray-100">
        {title}
      </h1>

      <div className="font-product-sans pt-8 tracking-wide text-center text-gray-100">
        {date}
      </div>
    </div>
  )
}

export default Title
