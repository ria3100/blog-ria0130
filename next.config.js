const path = require('path')
const fs = require('fs')

const withSass = require('@zeit/next-sass')

const shiki = require('rehype-shiki')
const addClasses = require('rehype-add-classes')

const withMDX = require('@zeit/next-mdx')({
  // parse mdx files
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [shiki, { theme: 'monokai' }],
      [
        addClasses,
        {
          // postcss.config.js の whitelist にも追加すること
          pre: 'shiki bg-gray-900 p-4 mb-6',
          p: 'px-4 mb-6',
          h1: 'text-3xl px-4 mb-6',
          h2: 'text-2xl px-4 mb-6',
          h3: 'text-xl px-4 mb-6',
        },
      ],
    ],
  },
})

module.exports = withMDX(
  withSass({
    pageExtensions: ['tsx'],
    exportTrailingSlash: true,
    exportPathMap: async (_, { dev }) => {
      const staticPagePaths = {
        '/': { page: '/' },
        '/article/list': { page: '/article/list' },
        '/about': { page: '/about' },
      }

      if (dev) return staticPagePaths

      const articles = fs.readdirSync('./contents')

      const paths = articles.reduce((acc, article) => {
        acc[`/article/${article}`] = {
          page: '/article/[slag]',
          query: { slag: article },
        }
        return acc
      }, staticPagePaths)

      return paths
    },
    webpack: config => {
      config.resolve.alias['~'] = path.resolve(__dirname)
      return config
    },
  })
)
