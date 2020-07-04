import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { useRouter } from 'next/router'

import { firebase } from '~/lib/firebase'

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
}
const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  const router = useRouter()

  const isProduction = process.env.NODE_ENV === 'production'

  React.useEffect(() => {
    if (!isProduction) return

    const { analytics } = firebase
    if (typeof analytics !== 'function') return

    const page_path = router.pathname
    analytics().setCurrentScreen(page_path)
    analytics().logEvent('page_view', { page_path })
  }, [router])

  return <Component {...pageProps} />
}

export default MyApp
