const path = require('path')
const fs = require('fs')

const withCSS = require('@zeit/next-css')
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
  withSass(
    withCSS({
      pageExtensions: ['tsx', 'mdx'],
      exportTrailingSlash: true,
      exportPathMap: async () => {
        const staticPagePaaths = {
          '/': { page: '/' },
          '/article/list': { page: '/article/list' },
        }

        const articles = fs.readdirSync('./contents')

        const paths = articles.reduce((acc, article) => {
          acc[`/article/${article}`] = {
            page: '/article/[slag]',
            query: { slag: article },
          }
          return acc
        }, staticPagePaaths)

        return paths
      },
      webpack: config => {
        config.resolve.alias['~'] = path.resolve(__dirname)
        return config
      },
    })
  )
)
