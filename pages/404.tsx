import Head from 'next/head'
import tw, { styled } from 'twin.macro'
import type { NextPageWithLayout } from './_app'

const Inner = styled.div(() => [tw`flex h-screen items-center justify-center`])

const Message = styled.span(() => [
  tw`text-2xl font-bold text-synthwave-secondary`,
  tw`sm:text-4xl`,
])

const PageNotFound: NextPageWithLayout = () => {
  return (
    <Inner>
      <Message>404</Message>
    </Inner>
  )
}

PageNotFound.getLayout = (page) => {
  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
      </Head>
      {page}
    </>
  )
}

export default PageNotFound
