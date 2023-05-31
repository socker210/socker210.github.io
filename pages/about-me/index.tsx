import tw, { styled, theme } from 'twin.macro'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ProfileImage from '@components/ProfileImage'
import { Block } from '@styles/snippets'
import type { NextPageWithLayout } from '../_app'

const Section = styled.section(() => [
  tw`flex items-center justify-center`,
  tw`min-h-[calc(100vh - theme('spacing.header-height'))] p-spacing`,
])

const Inner = styled.div`
  display: grid;
  grid-template-areas:
    'profile'
    'paragraph';
  gap: 1rem;

  @media (min-width: ${theme('screens.md')}) {
    grid-template-areas: 'profile paragraph paragraph';

    ${() => ({
      ...tw`grid-cols-3`,
      ...tw`py-[min(theme('spacing.24'), 12vh)] px-[min(theme('spacing.12'), 4vw)]`,
    })}
  }
`

const profile = {
  Container: styled.div`
    grid-area: profile;

    ${() => ({
      ...tw`mx-auto w-full max-w-[theme('spacing.72')]`,
      ...tw`md:max-w-none`,
    })}

    @media (min-width: ${theme('screens.md')}) {
      ${() => ({
        ...tw`flex flex-col justify-center`,
      })}
    }
  `,
  Image: ProfileImage,
}

const paragraph = {
  Container: styled.div`
    grid-area: paragraph;

    ${() => ({
      ...tw`space-y-2`,
    })}

    @media (min-width: ${theme('screens.md')}) {
      ${() => ({
        ...tw`flex flex-col justify-center`,
      })}
    }
  `,
  Title: styled.h1(() => [
    tw`font-semibold text-synthwave-secondary`,
    tw`text-[clamp(theme('fontSize.2xl'), 3.6vw, theme('fontSize.4xl'))]`,
    tw`mb-2`,
    tw`md:mb-4`,
  ]),
  Content: styled.p(() => [
    tw`text-[clamp(theme('fontSize.base'), 2.2vw, theme('fontSize.xl'))]`,
  ]),
  Emphasis: styled.span(() => [tw`font-semibold text-synthwave-secondary`]),
}

const Page: NextPageWithLayout = () => {
  return (
    <Block>
      <Section>
        <Inner>
          <profile.Container>
            <profile.Image src='assets/images/memoji.png' />
          </profile.Container>
          <paragraph.Container>
            <paragraph.Title>안녕하세요 👋</paragraph.Title>
            <paragraph.Content>
              6년 동안{' '}
              <paragraph.Emphasis>프론트엔드 개발자</paragraph.Emphasis>로서 웹
              서비스 개발을 하였습니다.
            </paragraph.Content>
            <paragraph.Content>
              효율적인 코드 작성을 위한 방법, 컴포넌트 구성에 따른 재사용성 증가
              등에 대해 항상 고민합니다.
            </paragraph.Content>
            <paragraph.Content>
              현재는 특정 라이브러리 또는 프레임워크에 국한되지 않고 다양한
              방법론을 활용하여 개발하는 개발자로 성장하기 위해 노력하고
              있습니다.
            </paragraph.Content>
          </paragraph.Container>
        </Inner>
      </Section>
    </Block>
  )
}

Page.getLayout = (page) => {
  return (
    <>
      <Head>
        <title>About me | Junyong Park</title>
      </Head>
      <Header />
      {page}
      <Footer />
    </>
  )
}

export default Page
