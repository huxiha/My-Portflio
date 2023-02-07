import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@100&display=swap" rel="stylesheet"/>
      </Head>
      <body className='bg-gradient-to-r from-green-500 to-blue-500 dark:bg-gradient-to-r dark:from-dark-500 dark:to-dark-700 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
