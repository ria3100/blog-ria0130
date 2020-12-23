export const SectionTitle: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col text-center w-full mb-8 lg:mb-12 lg:mt-8">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        {children}
      </h1>
    </div>
  )
}
