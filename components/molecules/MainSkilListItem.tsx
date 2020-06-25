import * as React from 'react'

type Props = {
  item: {
    name: string
    img: string
  }
}

export const MainSkilListItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white">
        <div className="w-16 h-16 bg-gray-100 mr-4 flex justify-center items-center">
          {/* <img
            alt="team"
            className="w-16 object-cover object-center flex-shrink-0"
            src={item.img}
          /> */}
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{item.name}</h2>
          <p className="text-gray-500"></p>
        </div>
      </div>
    </div>
  )
}
