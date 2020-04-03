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
          pre: 'shiki bg-gray-900 p-6',
          p: 'p-6',
          h1: 'text-4xl p-6',
          h2: 'text-3xl p-6',
          h3: 'text-xl p-6',
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
        '/article/list': { page: '/article/List' },
        '/about': { page: '/About' },
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
