import tw, { styled } from 'twin.macro'
import { FaMedium, FaGithub, FaStackOverflow, FaNpm } from 'react-icons/fa'
import _Logo from '@components/Logo'
import { Block } from '@styles/snippets'
import constant from '@src/constant'

const Root = styled.footer(() => [
  tw`border-t-2 border-solid border-synthwave-secondary`,
  tw`font-roboto`,
])

const Inner = styled.div(() => [
  tw`flex flex-col`,
  tw`py-[min(theme('spacing.7'), 5vh)] items-center px-m-spacing`,
  tw`sm:py-[min(theme('spacing.10'), 7vh)] sm:items-stretch sm:px-pc-spacing`,
])

const Logo = styled(_Logo)(() => [tw`text-xl`, tw`sm:text-2xl`])

const ContactContainer = styled.div(() => [
  tw`grid grid-cols-1`,
  tw`sm:grid-cols-2`,
])

const ContactItem = styled.div(() => [tw`text-center`, tw`sm:text-left`])

const ContactHeader = styled.p(() => [
  tw`font-semibold uppercase tracking-wider text-synthwave-secondary`,
  tw`mb-2 mt-7`,
])

const Address = styled.address(() => [tw`not-italic leading-relaxed`])

const Social = styled.ul(() => [tw`space-x-4`])

const SocialItem = styled.li(() => [tw`inline-block`, tw`text-xl`])

const Message = styled.p(() => [
  tw`bg-synthwave-secondary`,
  tw`px-2 py-3`,
  tw`text-center text-xs font-medium uppercase tracking-widest text-synthwave-primary`,
  tw`sm:text-sm`,
])

const links = [
  {
    title: 'Github',
    link: constant.link.github,
    Icon: FaGithub,
  },
  {
    title: 'Medium',
    link: constant.link.medium,
    Icon: FaMedium,
  },
  {
    title: 'Stackoverflow',
    link: constant.link.stackoverflow,
    Icon: FaStackOverflow,
  },
  {
    title: 'NPM',
    link: constant.link.npm,
    Icon: FaNpm,
  },
]

const Footer: React.FC = () => {
  return (
    <Root>
      <Block>
        <Inner>
          <Logo />
          <ContactContainer>
            <ContactItem>
              <ContactHeader>Job offer inquiries</ContactHeader>
              <Address>
                <a href={`mailto:${constant.email}`} tw='underline'>
                  {constant.email}
                </a>
                <br />
                {constant.location}
              </Address>
            </ContactItem>
            <ContactItem>
              <ContactHeader>Social</ContactHeader>
              <Social>
                {links.map((link) => (
                  <SocialItem key={link.title}>
                    <a
                      rel='noopener'
                      target='_blank'
                      href={link.link}
                      title={link.title}
                    >
                      <link.Icon />
                    </a>
                  </SocialItem>
                ))}
              </Social>
            </ContactItem>
          </ContactContainer>
        </Inner>
      </Block>
      <Message>{`Let's work together!`}</Message>
    </Root>
  )
}

export default Footer
