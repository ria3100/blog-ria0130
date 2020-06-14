import * as React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  og: { type: string; image: string; path: string; description: string }
  keywords?: string[]
}

export const Meta: React.FC<Props> = ({ title, og, keywords }) => {
  const getFullPath = (path: string) => `https://${process.env.HOST}${path}`

  return (
    <Head>
      <title>{title && title + ' | '}Ria</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <meta
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
        name="viewport"
      />
      <meta content="#272821" name="theme-color" />
      <link href="/manifest.json" rel="manifest" />
      <link rel="shortcut icon" type="image/x-icon" href="/icons/icon512.png" />
      <link rel="apple-touch-icon" type="image/png" href="/icons/icon512.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={og.description} />
      <meta
        name="twitter:image:src"
        content={getFullPath(og.image || '/site_card.png')}
      />
      <meta content="@_Ria0130" name="twitter:site" />
      <meta content="@_Ria0130" name="twitter:creator" />
      <meta property="og:type" content={og.type} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={getFullPath(og.image || '/site_card.png')}
      />
      <meta property="og:description" content={og.description} />
      <meta property="og:url" content={getFullPath(og.path)} />
      <meta property="og:site_name" content="Ria" />
      {keywords && <meta content={keywords.join(',')} name="keywords" />}
    </Head>
  )
}
