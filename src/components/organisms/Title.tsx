type Props = { title: string; date: string }

export const Title: React.FC<Props> = ({ title, date }) => {
  return (
    <div className="flex flex-col justify-center h-400px container mx-auto w-full">
      <h1 className="font-product-sans font-bold text-4xl tracking-wide text-center text-gray-100 px-4">
        {title}
      </h1>

      <div className="font-product-sans pt-2 lg:pt-8 tracking-wide text-center text-gray-100">
        {date}
      </div>
    </div>
  )
}
