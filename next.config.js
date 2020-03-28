const path = require('path')
const withCSS = require('@zeit/next-css')
const withMDX = require('@next/mdx')()

module.exports = withMDX(
  withCSS({
    pageExtensions: ['ts', 'tsx', 'mdx']
    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
      }
    },
    webpack: config => {
      config.resolve.alias['~'] = path.resolve(__dirname)
      return config
    },
  })
)
