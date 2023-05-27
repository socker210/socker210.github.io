import tw, { styled } from 'twin.macro'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ProfileImage from '@components/ProfileImage'
import { ContentBox } from '@styles/snippets'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <ContentBox>
      <ProfileImage src='assets/images/profile-circle.png' />
    </ContentBox>
  )
}

Page.getLayout = function (page) {
  return (
    <>
      <Head>
        <title>Junyong Park | Frontend Developer</title>
      </Head>
      <p tw='p-4 text-center text-xl'>안녕하세요 👋</p>
      <Header />
      {page}
      <Footer />
    </>
  )
}

export default Page
