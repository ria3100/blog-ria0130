import * as React from 'react'

const ReactDomServer = require('react-dom/server')
const { MDXProvider } = require('@mdx-js/react')

export const mdx2string = (MDXComponent: MDXComponent): string =>
  ReactDomServer.renderToStaticMarkup(
    <MDXProvider components={{}}>
      <MDXComponent />
    </MDXProvider>
  )
