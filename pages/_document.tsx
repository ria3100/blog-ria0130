import Document, { Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

// @ts-ignore
import bundleCss from '!raw-loader!../styles/main.scss'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = ctx.renderPage((App) => (props) => <App {...props} />);
    const initialProps = await Document.getInitialProps(ctx)
    // return { ...initialProps }
    return {
      ...page,
      styles: [
        ...initialProps.styles,
        <style
          key="custom"
          dangerouslySetInnerHTML={{
            __html: bundleCss,
          }}
        />,
      ],
    }
  }

  render() {
    return (
      <html lang="ja">
        <Head/>
        <body className="bg-body-bg">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
