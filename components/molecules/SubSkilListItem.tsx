type Props = { name: string }

export const SubSkilListItem: React.FC<Props> = ({ name }) => {
  return (
    <div className="p-2 sm:w-1/4 w-1/2">
      <div className="flex h-full items-center">
        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            className="w-3 h-3"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>
        <span className="title-font font-medium">{name}</span>
      </div>
    </div>
  )
}
