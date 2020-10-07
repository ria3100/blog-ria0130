import Document, { Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

// @ts-ignore
import style from '!!raw-loader!../temp/build.css'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = ctx.renderPage((App) => (props) => <App {...props} />)
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...page,
      styles: [
        ...initialProps.styles,
        <style key="custom" dangerouslySetInnerHTML={{ __html: style }} />,
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
          {/* <amp-install-serviceworker
            src="https://ria0130.dev/sw.js"
            data-iframe-src="https://ria0130.dev/install-sw.html"
            layout="nodisplay"
          /> */}
        </body>
      </html>
    )
  }
}
