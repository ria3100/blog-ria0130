import matter from 'gray-matter'

const fetchOptions = {
  headers: {
    'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY as string,
  },
}

export const getAllPostSlugs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MICRO_CMS}/article?fields=id&limit=1000`,
    fetchOptions
  )
  const ids = (await res.json())['contents'].map((item: any) => item.id)

  return ids
}

export const getPostBySlug = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MICRO_CMS}/article?ids=${slug}`,
    fetchOptions
  )
  const fileContents = (await res.json()).contents[0].markdown

  const { data, content } = matter(fileContents)

  return {
    ...data,
    slug,
    content,
  }
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
  const posts = (
    await Promise.all(
      slugs.map(async (slug: string) => await getPostBySlug(slug))
    )
  ).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
