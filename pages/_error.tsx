import * as React from 'react'
import Head from 'next/head'
import { NextPageContext } from 'next'

import { Navigation } from '~/components/organisms'

export const config = { amp: true }

const statusCodes: { [code: number]: string } = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error',
}

export type ErrorProps = {
  statusCode: number
  title?: string
}

const _getInitialProps = ({
  res,
  err,
}: NextPageContext): Promise<ErrorProps> | ErrorProps => {
  const statusCode =
    res && res.statusCode ? res.statusCode : err ? err.statusCode! : 404
  return { statusCode }
}

/**
 * `Error` component used for handling errors.
 */
export default class Error<P = {}> extends React.Component<P & ErrorProps> {
  static displayName = 'ErrorPage'

  static getInitialProps = _getInitialProps
  static origGetInitialProps = _getInitialProps

  render() {
    const { statusCode } = this.props
    const title =
      this.props.title ||
      statusCodes[statusCode] ||
      'An unexpected error has occurred'

    return (
      <>
        <Head>
          <title>
            {statusCode}: {title}
          </title>
        </Head>

        <div className="flex flex-col min-h-screen bg-gray-900">
          <div className="absolute w-full">
            <Navigation />
          </div>

          <div className="flex flex-col justify-center text-center h-screen text-gray-200">
            <div>
              {statusCode ? (
                <h1 className="text-3xl leading-8 border-r inline-block p-8 mr-8">
                  {statusCode}
                </h1>
              ) : null}
              <div className="inline-block text-left align-middle leading-8 inline-block">
                <h2 className="text-sm">{title}.</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
