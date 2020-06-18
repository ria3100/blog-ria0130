import * as React from 'react'

export const Mainvisual: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full h-60vh min-h-400 lg:h-80vh max-h-900 bg-gray-900">
      {/* <div
        className="bg-bora-bora text-white font-bold py-4 px-6 w-1/3 rounded m-6 absolute"
        style={{
          top: -60,
          right: 180,
          display: 'block',
          width: 200,
          height: 200,
          borderRadius: 100,
        }}
      />
      <div
        className="bg-dance-to-forget text-white font-bold py-4 px-6 w-1/3 rounded m-6 absolute"
        style={{
          top: -60,
          right: -20,
          display: 'block',
          width: 220,
          height: 220,
          transform: 'rotate(-45deg)',
        }}
      /> */}

      <div className="pointer-events-none">
        <img
          className="mx-auto w-80px lg:w-140px mb-8"
          src="/mainvisual/ria.svg"
        />
        <img
          className="mx-auto w-280px lg:w-400px"
          src="/mainvisual/caption.svg"
        />
      </div>
    </div>
  )
}
