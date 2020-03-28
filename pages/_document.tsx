import Document, { Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head/>
        <body className="bg-body-bg">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
