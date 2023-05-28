import tw, { styled } from 'twin.macro'
import Head from 'next/head'
import _Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ProfileImage from '@components/ProfileImage'
import { Block, ContentBox } from '@styles/snippets'
import type { NextPageWithLayout } from './_app'

const Greeting = styled(Block)(() => [
  tw`text-right`,
  tw`px-m-spacing py-2`,
  tw`sm:px-pc-spacing sm:py-4`,
])

const Link = styled(_Link)(() => [
  tw`inline-flex items-center justify-end space-x-2`,
  tw`font-roboto text-sm font-medium uppercase tracking-widest`,
  tw`sm:text-base`,
])

const Page: NextPageWithLayout = () => {
  return (
    <Block>
      <ContentBox>
        <ProfileImage src='assets/images/profile-circle.png' />
      </ContentBox>
    </Block>
  )
}

Page.getLayout = function (page) {
  return (
    <>
      <Head>
        <title>Junyong Park | Frontend Developer</title>
      </Head>
      <Greeting as='nav'>
        <Link href='/about-me'>
          <span>about me</span> <BsArrowRight />
        </Link>
      </Greeting>
      <Header />
      {page}
      <Footer />
    </>
  )
}

export default Page
