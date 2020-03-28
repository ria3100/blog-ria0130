import { NextPage, GetStaticProps } from 'next'

import { HomeTemplate } from '~/components/templates'

const Home: NextPage = () => {
  return <HomeTemplate />
}

// export const getStaticProps: GetStaticProps = async () => {
//   const foo = 'Foo'
//   return { props: { foo } }
// }

export default Home
