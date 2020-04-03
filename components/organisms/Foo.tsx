import * as React from 'react'

const Foo: React.FC = () => {
  const Item = () => (
    <div className="rounded overflow-hidden shadow bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-3 gap-16">
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default Foo
