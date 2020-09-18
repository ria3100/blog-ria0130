import matter from 'gray-matter'

const fetchOptions = {
  headers: {
    'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY as string,
  },
}

const converContent = (content: any) => {
  if (content.tags) content.tags = content.tags.map((tag: any) => tag.name)
  return content
}

export const getAllPostSlugs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MICRO_CMS}/article?fields=id&limit=1000`,
    fetchOptions
  )
  const contents = (await res.json())['contents']
  const ids: string[] = contents.map((item: any) => item.id)

  return ids
}

export const getPostBySlug = async (slugs: string[]) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MICRO_CMS}/article?ids=${slugs.join()}`,
    fetchOptions
  )

  const posts = await res.json()
  const contents = posts.contents

  const foo = contents.map((content: any) => converContent(content))

  return foo

  // const fileContents = posts.contents[0].markdown

  // const { data, content } = matter(fileContents)

  // return {
  //   ...data,
  //   slug,
  //   content,
  // }
}

export const getPostList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MICRO_CMS}/article?fields=id,title,description,tags,publishedAt&limit=10`,
    fetchOptions
  )
  const { contents } = await res.json()

  return contents.map((content: any) => {
    content.tags = content.tags.map((tag: any) => tag.name)
    return content
  })
}

export const getAllPosts = async () => {
  const slugs = await getAllPostSlugs()
  const posts = await getPostBySlug(slugs)
  // (
  //   await Promise.all(
  //     slugs.map(async (slug: string) => await getPostBySlug(slugs))
  //   )
  // ).sort((post1, post2) => (post1.publishedAt: > post2.publishedAt: ? -1 : 1))
  return posts
}
