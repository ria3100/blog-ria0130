import { NextPage, GetStaticProps } from 'next'

const Home: NextPage<{ foo: string }> = ({ foo }) => (
  <>
    <h1>Hello world! - {foo}</h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const foo = 'Foo'
  return { props: { foo } }
}

export default Home
