import Document, { Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

const postcss = require('postcss')

import fs from 'fs'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const rootDir = process.cwd()

    const css = fs.readFileSync(`${rootDir}/styles/main.css`, 'utf8')

    const codeBlockClass: {[Key in string]: string} = {
      pre: 'shiki bg-gray-900 p-4 mb-6 mt-0 overflow-x-scroll',
      'pre > code': 'codeBlock',
      p: 'px-4 mb-6',
      h1: 'text-3xl px-4 mb-6',
      h2: 'text-2xl px-4 mb-6',
      h3: 'text-xl px-4 mb-6',
      ul: 'px-4 mb-6',
    }

    const whitelist = Object.keys(codeBlockClass).reduce((acc: any, key) => {
      return Array.from(new Set([...acc, ...codeBlockClass[key].split(' ')]))
    }, [])

    const isProduction = [
      require('@fullhuman/postcss-purgecss')({
        content: [
          `${rootDir}/pages/**/*.tsx`,
          `${rootDir}/components/**/*.tsx`,
        ],
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

    const page = ctx.renderPage(App => props => <App {...props} />)
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...page,
      styles: [
        ...initialProps.styles,
        <style
          key="custom"
          dangerouslySetInnerHTML={{
            __html: style,
          }}
        />,
      ],
    }
  }

  render() {
    return (
      <html lang="ja">
        <Head />
        <body className="bg-body-bg">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
