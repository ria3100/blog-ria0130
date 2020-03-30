import * as React from 'react'

const Mainvisual: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full h-80vh max-h-900 bg-gray-900">
      <div>
        <h1 className="font-product-sans font-bold text-7rem tracking-wide text-center text-gray-100">
          Ria
        </h1>
        <p className="font-lato font-light text-xl tracking-wide text-center text-gray-100">
          Front-end Engineer.
          <br />
          Full-stack JavaScript / TypeScript Developer.
        </p>
        <div className="bg-dance-to-forget text-white font-bold py-4 px-6 w-1/3 rounded m-6">
          div
        </div>
        <div className="bg-bora-bora text-white font-bold py-4 px-6 w-1/3 rounded m-6">
          div
        </div>
      </div>
    </div>
  )
}

export default Mainvisual
