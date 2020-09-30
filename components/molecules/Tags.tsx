import { Tag } from '~/components/atoms'

type Props = { tags: string[] }

export const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <span className="">
      <i className="fas fa-tags" />
      <ul className="inline">
        {tags.map((tag) => (
          <li className="inline-block" key={tag}>
            <Tag item={tag} />
          </li>
        ))}
      </ul>
    </span>
  )
}
