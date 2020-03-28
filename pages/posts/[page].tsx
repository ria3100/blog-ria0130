import * as React from 'react'
// import { getPageCountList, getPostList } from '~/utils/post'

export default () => <p>posts</p>

// type Props = { postList: Post[] }
// const Posts: React.FC<Props> = ({ postList }) => {
//   return <div>{JSON.stringify(postList)}</div>
// }

// export async function getStaticPaths() {
//   const pageCountList = await getPageCountList()
//   const paths = pageCountList.map(i => `/posts/${i}`)

//   return { paths, fallback: false }
// }

// type StaticProps = { params: { page: number } }
// export async function getStaticProps({ params }: StaticProps) {
//   const { page } = params
//   const postList = await getPostList(page)

//   return { props: { postList } }
// }

// export default Posts
