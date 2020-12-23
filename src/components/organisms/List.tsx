import { ListItem } from '~/components/molecules'

type Props = { articles: ArticleListItem[] }

export const List: React.FC<Props> = ({ articles }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="flex flex-col mx-auto w-full my-20">
          {articles.map((article, i) => (
            <ListItem article={article} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
