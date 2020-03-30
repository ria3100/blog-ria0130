import * as React from 'react'

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-col justify-center h-30vh-80px w-full">
      <h1 className="font-product-sans font-bold text-4xl tracking-wide text-center text-gray-100">
        {title}
      </h1>
    </div>
  )
}

export default Title
