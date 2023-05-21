'use client'

import { useRef, useEffect, useState, ReactNode, ElementType } from 'react'

interface TypeWriterProps {
  container?: ElementType
  typeSpeed?: number
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

const typing = (tokens: Token[], typeSpeed: number): { start: () => void } => {
  let index = 0

  const start = () => {
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
    }
  }

  return { start }
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  typeSpeed = -1,
  container,
  children,
}) => {
  const [renderCount, setRenderCount] = useState(0)

  const sourceRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const prevSourceHTML = useRef<string>()

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
    if (sourceRef.current && targetRef.current) {
      const tokens: Array<Token> = tokenize(
        sourceRef.current.firstChild as Node,
        targetRef.current
      )

      typing(tokens, typeSpeed).start()
    }
  }, [renderCount, typeSpeed])

  const Container = container || 'div'

  return (
    <>
      <div ref={sourceRef} className='fixed z-[-1] hidden h-0 w-0'>
        {children}
      </div>
      <Container ref={targetRef} className='contents' />
    </>
  )
}

export default TypeWriter
