import * as React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  og: { image: string; url: string }
  keywords?: string[]
}
const Meta: React.FC<Props> = ({ title, og, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <meta
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
        name="viewport"
      />
      <meta content="#272821" name="theme-color" />
      <link href="/manifest.json" rel="manifest" />
      {/* <link rel="shortcut icon" type="image/x-icon" href="" /> */}
      {/* <link rel="apple-touch-icon" type="image/png" href="" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta content="@_Ria0130" name="twitter:site" />
      <meta content="@_Ria0130" name="twitter:creator" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={og.image} />
      <meta property="og:description" content="" />
      <meta property="og:url" content={og.url} />
      <meta content="Ria" property="og:site_name" />
      {keywords && <meta content={keywords.join(',')} name="keywords" />}
    </Head>
  )
}

export default Meta
