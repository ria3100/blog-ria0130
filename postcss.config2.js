const config = require('./next.config')

const classList = config.purgecssWhitelist
const whitelist = Object.keys(classList).reduce((acc, key) => {
  return Array.from(new Set([...acc, ...classList[key].split(' ')]))
}, [])

// 使われてないスタイルを事前ビルドするとHMRで開発する際に不便なので production のみに
const isProduction = [
  require('@fullhuman/postcss-purgecss')({
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelist,
  }),
  require('cssnano')({ preset: 'default' }),
]

module.exports = {
  plugins: [
    require('tailwindcss')(),
    require('autoprefixer')(),
    // ...(process.env.NODE_ENV === 'development' ? [] : isProduction),
    ...isProduction,
  ],
}