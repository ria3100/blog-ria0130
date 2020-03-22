import jdown from 'jdown'

function Zeit({ title, contents }: { title: string; contents: string }) {
  return (
    <div>
      {title} / {contents}
    </div>
  )
}

export async function getStaticPaths() {
  const content = await jdown('./content')

  const paths = Object.keys(content).map(slag => `/blog/${slag}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const slag = params.slag
  const content = await jdown('./content')
  return {
    props: {
      title: content[slag].title,
      contents: content[slag].contents,
    },
  }
}

export default Zeit
