import { NextPage, GetStaticProps } from 'next'

const Home: NextPage<{ foo: string }> = ({ foo }) => (
  <h1>Hello world! - {foo}</h1>
)

export const getStaticProps: GetStaticProps = async () => {
  const foo = 'Foo'
  return { props: { foo } }
}

export default Home
