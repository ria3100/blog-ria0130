import fs from 'fs'
import postcss from 'postcss'

export const preBuildStyle = async () => {
  const rootDir = process.cwd()

  const css = fs.readFileSync(`${rootDir}/styles/main.css`, 'utf8')

  const codeBlockClassList: { [Key in string]: string } = {
    pre: 'shiki bg-gray-900 p-4 mb-6 mt-0 overflow-x-scroll',
    'pre > code': 'codeBlock',
    p: 'px-4 mb-6',
    h1: 'text-3xl px-4 mb-6',
    h2: 'text-2xl px-4 mb-6',
    h3: 'text-xl px-4 mb-6',
    ul: 'px-4 mb-6',
  }

  const whitelist = Object.keys(codeBlockClassList).reduce((acc: any, key) => {
    return Array.from(new Set([...acc, ...codeBlockClassList[key].split(' ')]))
  }, [])

  const isProduction = [
    require('@fullhuman/postcss-purgecss')({
      content: [`${rootDir}/pages/**/*.tsx`, `${rootDir}/components/**/*.tsx`],
      defaultExtractor: (content: any) =>
        content.match(/[\w-/:]+(?<!:)/g) || [],
      whitelist,
    }),
    require('cssnano')({ preset: 'default' }),
  ]

  const plugins = [
    require('tailwindcss')(),
    require('autoprefixer')(),
    ...(process.env.NODE_ENV === 'development' ? [] : isProduction),
  ]

  const style = await new Promise<string>(resolve => {
    postcss(plugins)
      .process(css)
      .then((result: any) => {
        resolve(result.css)
      })
  })

  return style
}
