import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export const getPostSlugs = async () => {
  const foo = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS}/article`, {
    headers: {
      'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY as string,
    },
  })
  console.log(await foo.json())

  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = async (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {} as any

  // Ensure only the minimal needed data is exposed
  fields.forEach((field: string) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export const getAllPosts = async (fields: string[] = []) => {
  const slugs = await getPostSlugs()
  const posts = (
    await Promise.all(
      slugs.map(async (slug) => await getPostBySlug(slug, fields))
    )
  ).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
