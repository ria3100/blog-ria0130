import matter from 'gray-matter'

export const getPostSlugs = async () => {
  const res = (await fetch(
    `${process.env.NEXT_PUBLIC_MICRO_CMS}/article?fields=id&limit=1000`,
    {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY as string,
      },
    }
  )) as any
  const ids = (await res.json())['contents'].map((item: any) => item.id)

  return ids
}

export const getPostBySlug = async (slug: string) => {
  const res = (await fetch(
    `${process.env.NEXT_PUBLIC_MICRO_CMS}/article?ids=${slug}`,
    {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY as string,
      },
    }
  )) as any
  const fileContents = (await res.json()).contents[0].markdown

  const { data, content } = matter(fileContents)

  return {
    ...data,
    slug,
    content,
  }
}

export const getAllPosts = async () => {
  const slugs = await getPostSlugs()
  const posts = (
    await Promise.all(
      slugs.map(async (slug: string) => await getPostBySlug(slug))
    )
  ).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
