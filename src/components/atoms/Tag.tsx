import Link from 'next/link'

type Props = { item: string }
export const Tag: React.FC<Props> = ({ item }) => {
  const encodeTag = encodeURI(item.toLowerCase())

  return (
    <Link href={`/articles/${encodeTag}/1`}>
      <a className="bg-gray-100 ml-2 rounded-3px text-center text-xs py-1 px-2">
        {item}
      </a>
    </Link>
  )
}
