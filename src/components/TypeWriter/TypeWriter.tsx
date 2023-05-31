'use client'

import { useRef, useEffect, useState } from 'react'
import type { ReactNode, ElementType } from 'react'
import { keyframes } from '@emotion/react'
import { styled } from 'twin.macro'

interface TypeWriterProps {
  container?: ElementType
  typeSpeed?: number
  caret?: boolean
  children: ReactNode
}

type HTMLToken = {
  type: 'element'
  container: HTMLElement
  value: Node
}

type StringToken = {
  type: 'text'
  container: HTMLElement
  value: string
}

type Token = HTMLToken | StringToken

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const Container = styled.p<{ caret: boolean }>`
  ${({ caret }) => ({
    ...(caret && {
      '::after': {
        content: '"_"',
        animation: `${fadeInOut} 0.8s ease infinite`,
      },
    }),
  })}
`

const tokenize = (source: Node, container: HTMLElement): Token[] => {
  const tokens: Token[] = []

  const exec = (
    node: Node,
    siblingNode: Node | null,
    container: HTMLElement
  ): void => {
    const child = node.firstChild
    let nextContainer = container

    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.toString() ?? ''

      for (let i = 0; i < text.length; i++) {
        tokens.push({
          type: 'text',
          container: nextContainer,
          value: text[i],
        })
      }
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const newContainer = node.cloneNode(false)

      tokens.push({
        type: 'element',
        container: nextContainer,
        value: newContainer,
      })

      nextContainer = newContainer as HTMLElement
    }

    if (child) {
      exec(child, child.nextSibling, nextContainer)
    }

    if (siblingNode) {
      exec(siblingNode, siblingNode.nextSibling, container)
    }
  }

  exec(source, source.nextSibling, container)

  return tokens
}

const typing = (
  tokens: Token[],
  typeSpeed: number
): { start: () => Promise<void> } => {
  let index = 0

  const start = (): Promise<void> => {
    return new Promise((resolve) => {
      const data = tokens[index++]
      const speed = typeSpeed === -1 ? Math.random() * 50 + 10 : typeSpeed
      const duration = data.type === 'text' ? speed : 0

      if (data.type === 'element') {
        data.container.appendChild(data.value as Node)
      }

      if (data.type === 'text') {
        const container = data.container

        container.insertAdjacentText('beforeend', data.value as string)
      }

      if (index < tokens.length) {
        setTimeout(start, duration)
      } else {
        resolve()
      }
    })
  }

  return { start }
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  typeSpeed = -1,
  caret = true,
  container,
  children,
}) => {
  const [renderCount, setRenderCount] = useState(0)

  const sourceRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const prevSourceHTML = useRef<string>()
  const typingRef = useRef(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const sourceHTML = sourceRef.current?.innerHTML

    if (prevSourceHTML.current === undefined) {
      prevSourceHTML.current = sourceHTML
    }

    if (prevSourceHTML.current !== sourceHTML) {
      prevSourceHTML.current = sourceHTML

      setRenderCount((prev) => prev + 1)
    }
  })

  useEffect(() => {
    const targetEl = targetRef.current as HTMLDivElement
    const sourceEl = sourceRef.current as HTMLDivElement

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if (!typingRef.current && entry.isIntersecting) {
        typingRef.current = true

        for (const child of targetEl.childNodes) {
          targetEl.removeChild(child)
        }

        const tokens: Array<Token> = tokenize(
          sourceEl.firstChild as Node,
          targetEl
        )

        typing(tokens, typeSpeed)
          .start()
          .then(() => {
            typingRef.current = false
          })
      }
    })

    observer.observe(targetEl)

    return () => {
      observer.disconnect()
    }
  }, [renderCount, typeSpeed])

  return (
    <>
      <div ref={sourceRef} tw='fixed hidden h-0 w-0'>
        {children}
      </div>
      <Container ref={targetRef} as={container} caret={caret} />
    </>
  )
}

export default TypeWriter
