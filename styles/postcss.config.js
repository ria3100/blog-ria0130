const purgecss = require('@fullhuman/postcss-purgecss')

const codeBlockClassList = {
  pre: 'shiki bg-gray-900 p-4 mb-6 mt-0 overflow-x-scroll',
  'pre > code': 'codeBlock',
  p: 'px-4 mb-6',
  h1: 'text-3xl px-4 mb-6',
  h2: 'text-2xl px-4 mb-6',
  h3: 'text-xl px-4 mb-6',
  ul: 'px-4 mb-6',
}

const whitelist = Object.keys(codeBlockClassList).reduce((acc, key) => {
  return Array.from(new Set([...acc, ...codeBlockClassList[key].split(' ')]))
}, [])

const rootDir = process.cwd()

module.exports = ctx => ({
  map: ctx.options.map,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(ctx.env === 'production'
      ? {
          cssnano: { preset: 'default' },
          '@fullhuman/postcss-purgecss': {
            content: [
              `${rootDir}/pages/**/*.tsx`,
              `${rootDir}/components/**/*.tsx`,
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist,
          },
        }
      : {}),
  },
})
