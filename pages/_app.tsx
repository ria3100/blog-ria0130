import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { useRouter } from 'next/router'

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
}
const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
