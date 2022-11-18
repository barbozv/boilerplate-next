import type {AppProps} from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function MyApp ({ Component, PageProps }: AppProps) {
  return (
  <>
      <head>
        <title>React Avancado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </head>

      <Component {...PageProps} />
    </>
  )
}

export default MyApp
