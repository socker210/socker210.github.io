import { useRef, useEffect } from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import tw, { theme, styled } from 'twin.macro'

interface ProfileImageProps extends ComponentPropsWithoutRef<'div'> {
  src: string
}

const boxShadowKey = '--profile-image-box-shadow'

const Root = styled.div`
  ${boxShadowKey}: none;

  ${() => ({
    ...tw`relative`,
    ...tw`h-auto w-full rounded-full pt-[100%]`,
    ...tw`bg-cover bg-center bg-no-repeat`,
    ...tw`opacity-0 transition-opacity duration-1000`,
  })}

  &::after {
    content: '';
    box-shadow: ${() => `var(${boxShadowKey})`};

    ${() => ({
      ...tw`absolute inset-0 -m-[1px]`,
      ...tw`rounded-full`,
    })};
  }
`

const toPixel = (width: number, ratio: number): string => `${width * ratio}px`

const getBoxShadow = (width: number): string =>
  `0 0 ${toPixel(width, 0.08)} ${toPixel(width, 0.11)} ${theme(
    'colors.synthwave.primary'
  )} inset`

const ProfileImage: React.FC<ProfileImageProps> = ({ src, ...props }) => {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (rootRef.current) {
      const observer = new ResizeObserver((entries) => {
        if (rootRef.current) {
          const { inlineSize } = entries[0].borderBoxSize[0]
          const boxShadow = getBoxShadow(inlineSize)

          rootRef.current.style.setProperty('opacity', '1')
          rootRef.current.style.setProperty('background-image', `url(${src})`)
          rootRef.current.style.setProperty(boxShadowKey, boxShadow)
        }
      })

      observer.observe(rootRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [src])

  return <Root ref={rootRef} {...props} />
}

export default ProfileImage
