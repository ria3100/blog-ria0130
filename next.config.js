const path = require('path')
const fs = require('fs')

const shiki = require('rehype-shiki')
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
  // parse mdx files
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [shiki, { theme: 'monokai' }],
      [addClasses, additions],
    ],
  },
})

// TODO: 5.x だと @rollup/pluginutils でエラーが出るので 4.0.6 を使っている
const withOffline = require('next-offline')

module.exports = withOffline(
  withMDX({
    pageExtensions: ['tsx'],
    // Firebase 環境で必要
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
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    // postcss.config.js でパースするためだけのプロパティ
    purgecssWhitelist: additions,
  })
)
