import Head from 'next/head'

type Props = {
  title: string
  description: string
  og: { type: string; image: string; path: string }
  keywords?: string[]
}

export const Meta: React.FC<Props> = ({ title, description, og, keywords }) => {
  const getFullPath = (path: string) =>
    `https://${process.env.NEXT_PUBLIC_HOST}${path}`
  const defaultCard = getFullPath('/site_card.png')

  return (
    <Head>
      <title>{title && title + ' | '}Ria</title>
      <meta name="description" content={description}></meta>
      <meta charSet="UTF-8" />
      <meta content="#272821" name="theme-color" />
      <meta name="description" content={description} />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" type="image/x-icon" href="/icons/icon512.png" />
      <link rel="apple-touch-icon" type="image/png" href="/icons/icon512.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Ria'} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={og.image || defaultCard} />
      <meta content="@_Ria0130" name="twitter:site" />
      <meta content="@_Ria0130" name="twitter:creator" />
      <meta property="og:type" content={og.type} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={og.image || defaultCard} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Ria" />
      {keywords && <meta content={keywords.join(',')} name="keywords" />}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      />
      <script
        async
        custom-element="amp-bind"
        src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
      ></script>
      <script
        async
        custom-element="amp-install-serviceworker"
        src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"
      ></script>
    </Head>
  )
}
