import * as React from 'react'

import { ListTemplate } from '~/components/templates'
import { Meta } from '~/components/atoms'

import { getArticles } from '~/utils/article'

type Props = { articles: any[] }
const List: React.FC<Props> = ({ articles }) => {
  const meta = {
    title: 'List',
    description: '記事の一覧',
    og: { type: 'website', image: '', path: '/article/list' },
  }

  return (
    <>
      <Meta {...meta} />
      <ListTemplate articles={articles} />
    </>
  )
}

export const getStaticProps = async () => {
  const articles = await getArticles()

  return { props: { articles } }
}

export default List
