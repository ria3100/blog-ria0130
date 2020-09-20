const path = require('path')
const fs = require('fs')
const fetch = require('node-fetch')

const shiki = require('./utils/rehype-shiki')
const addClasses = require('rehype-add-classes')

const additions = {
  pre: 'shiki bg-gray-900 p-4 mb-6 mt-0 overflow-x-scroll',
  'pre > code': 'codeBlock',
  p: 'px-4 mb-6',
  h1: 'text-3xl px-4 mb-6',
  h2: 'text-2xl px-4 mb-6',
  h3: 'text-xl px-4 mb-6',
  ul: 'px-4 mb-6',
}

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [shiki, { theme: 'monokai', useBackground: false }],
      [addClasses, additions],
    ],
  },
})

module.exports = withMDX({
  pageExtensions: ['tsx', 'mdx'],
  exportTrailingSlash: true,
  exportPathMap: async (_, { dev }) => {
    const staticPagePaths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }

    if (dev) return staticPagePaths

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MICRO_CMS}/article?fields=id&limit=1000`,
      {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY,
        },
      }
    )
    const contents = (await res.json())['contents']
    const slugs = contents.map((item) => item.id)

    const paths = slugs.reduce((acc, slug) => {
      acc[`/article/${slug}`] = {
        page: '/article/[slug]',
      }
      return acc
    }, staticPagePaths)

    return paths
  },
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
})
