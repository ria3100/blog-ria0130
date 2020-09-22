const path = require('path')

module.exports = {
  pageExtensions: ['tsx'],
  exportTrailingSlash: true,
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
}
