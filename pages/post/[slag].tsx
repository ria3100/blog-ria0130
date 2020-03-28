import { getContents } from '~/utils/post'
import { PostTemplate } from '~/components/templates'

type Props = { title: string; contents: string }
const Post: React.FC<Props> = ({ title, contents }) => {
  return <PostTemplate title={title} contents={contents} />
}

export async function getStaticPaths() {
  const content = await getContents()

  const paths = Object.keys(content).map(slag => `/post/${slag}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const slag = params.slag

  const content = await getContents()

  return {
    props: {
      title: content[slag].title,
      contents: content[slag].contents,
    },
  }
}

export default Post
