import { useRef, useEffect } from 'react'
import tw, { styled, theme } from 'twin.macro'
import Head from 'next/head'
import _Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { GrMusic } from 'react-icons/gr'
import { FiLink } from 'react-icons/fi'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ProfileImage from '@components/ProfileImage'
import Conveyor from '@components/ConveyorText'
import TypeWriter from '@components/TypeWriter'
import CodeHighlight from '@components/CodeHighlight'
import { Block } from '@styles/snippets'
import constant from '@src/constant'
import type { NextPageWithLayout } from './_app'

const nav = {
  Root: styled(Block)(() => [
    tw`flex items-center justify-end`,
    tw`h-nav-height`,
    tw`px-spacing`,
  ]),
  Link: styled(_Link)(() => [
    tw`inline-flex items-center justify-end space-x-2`,
    tw`font-roboto text-sm font-medium uppercase tracking-widest`,
    tw`sm:text-base`,
  ]),
}

const section = {
  Root: styled.section<{ onlyHeader?: boolean }>(({ onlyHeader = true }) => [
    tw`opacity-0 transition-opacity duration-1000`,
    tw`p-spacing`,
    onlyHeader
      ? tw`min-h-[calc(100vh - theme('spacing.header-height'))]`
      : tw`min-h-[calc(100vh - theme('spacing.nav-height') - theme('spacing.header-height'))]`,
  ]),
  Title: styled.h1(() => [
    tw`text-[clamp(theme('fontSize.2xl'), 4vw, theme('fontSize.6xl'))] text-center leading-tight`,
  ]),
  BackgroundTitle: styled.h3(() => [
    tw`text-center font-roboto font-semibold uppercase text-synthwave-primary`,
    tw`bg-synthwave-secondary`,
    tw`mb-10 inline-block px-5 py-4 text-3xl`,
    tw`sm:mb-14 sm:px-7 sm:py-6 sm:text-5xl`,
  ]),
  Emphasis: styled.span`
    position: relative;
    font-weight: 500;

    &::after {
      content: '';
      position: absolute;
      inset-inline: 0;
      bottom: 0.125em;
      height: 0.325em;
      background-color: ${() => theme('colors.synthwave.secondary')};
      z-index: -1;
    }
  `,
  ProfileImageContainer: styled.div(() => [
    tw`w-[calc(100% - 20vw)] mx-auto mb-8 mt-4 max-w-[18.75rem]`,
  ]),
}

const typeWriterContainer = tw.p`text-center`

const text = `while(forever) {
  sleep();
  eat();
  code();
};`

const Page: NextPageWithLayout = () => {
  // TODO: should refactor
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const section4Ref = useRef<HTMLDivElement>(null)
  const section5Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const e = entry.target as HTMLDivElement

          if (entry.isIntersecting) {
            e.style.setProperty('opacity', '1')
          }
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(section1Ref.current as HTMLDivElement)
    observer.observe(section2Ref.current as HTMLDivElement)
    observer.observe(section3Ref.current as HTMLDivElement)
    observer.observe(section4Ref.current as HTMLDivElement)
    observer.observe(section5Ref.current as HTMLDivElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <Block>
      <section.Root
        ref={section1Ref}
        onlyHeader={false}
        tw='flex items-center justify-center'
      >
        <section.Title>
          <span tw='text-[1.25em] font-medium text-synthwave-secondary'>
            안녕하세요
          </span>
          <section.ProfileImageContainer>
            <ProfileImage src='assets/images/memoji-laptop.png' />
          </section.ProfileImageContainer>
          <section.Emphasis>프론트엔드 개발자</section.Emphasis>로서
          <br />웹 서비스를 개발하고 있습니다
        </section.Title>
      </section.Root>
      <section.Root
        ref={section2Ref}
        tw='flex flex-col items-center justify-center'
      >
        <section.BackgroundTitle>Skills</section.BackgroundTitle>
        <p tw='my-3 text-xl sm:my-5 sm:text-2xl'>
          현재까지 이러한 것들을{' '}
          <section.Emphasis>다루었습니다</section.Emphasis>
        </p>
        <Conveyor>
          <Conveyor.Text>HTML</Conveyor.Text>
          <Conveyor.Text>CSS</Conveyor.Text>
          <Conveyor.Text>Javascript</Conveyor.Text>
          <Conveyor.Text>Typescript</Conveyor.Text>
          <Conveyor.Text>React</Conveyor.Text>
          <Conveyor.Text>Next.js</Conveyor.Text>
          <Conveyor.Text>Emotion</Conveyor.Text>
          <Conveyor.Text>SQL</Conveyor.Text>
          <Conveyor.Text>Git</Conveyor.Text>
        </Conveyor>
      </section.Root>
      <section.Root
        ref={section3Ref}
        tw='flex flex-col items-center justify-center'
      >
        <section.BackgroundTitle>MINDSET</section.BackgroundTitle>
        <TypeWriter container={typeWriterContainer}>
          <span tw='text-xl sm:text-2xl'>
            제품에 대한 이해와 사용자 경험 개선은 좋은 제품을 만드는데 중요한
            요소라고 생각합니다.
            <span tw='my-2 block' />
            이러한 요소를 분석하고 개발하며 성장하는 발판으로 삼는 개발자가 되기
            위해 노력합니다.
          </span>
        </TypeWriter>
      </section.Root>
      <section.Root
        ref={section4Ref}
        tw='flex flex-col items-center justify-center'
      >
        <section.BackgroundTitle tw='bg-[#e90000] text-white'>
          life
        </section.BackgroundTitle>
        <div tw='text-base sm:text-xl'>
          <CodeHighlight text={text} />
        </div>
      </section.Root>
      <section.Root
        ref={section5Ref}
        tw='flex flex-col items-center justify-center'
      >
        <section.BackgroundTitle tw='flex items-center space-x-[0.5em] bg-[#f222ff]'>
          <span>Synthwave</span> <GrMusic />
        </section.BackgroundTitle>
        <section.ProfileImageContainer>
          <ProfileImage src='assets/images/profile-circle.png' />
        </section.ProfileImageContainer>
        <a
          rel='noopener'
          target='_blank'
          href={constant.link.synthwaveMusic}
          tw='mt-[0.5em] flex items-center space-x-[0.5em] font-roboto text-xl font-medium uppercase sm:text-2xl'
        >
          <FiLink />
          <span>youtu.be</span>
        </a>
      </section.Root>
    </Block>
  )
}

Page.getLayout = function (page) {
  return (
    <>
      <Head>
        <title>Junyong Park | Frontend Developer</title>
        <meta property='og:title' content='Junyong Park | Frontend Developer' />
      </Head>
      <nav.Root as='nav'>
        <nav.Link href='/about-me'>
          <span>about me</span> <BsArrowRight />
        </nav.Link>
      </nav.Root>
      <Header />
      {page}
      <Footer />
    </>
  )
}

export default Page
