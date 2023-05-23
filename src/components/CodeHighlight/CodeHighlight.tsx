'use client'

import type { ReactNode } from 'react'
import { lowlight } from 'lowlight'
import type { Span, Text as llText } from 'lowlight/lib/core'

interface CodeHighlightProps {
  language?: Language
  text: string
}

type Language = 'html' | 'js'

type Element = {
  type: 'element'
  className: string
  value: string
}

type Text = {
  type: 'text'
  value: string
}

type Node = Element | Text

const hasNewline = (str: string): boolean => {
  return /\n/.test(str)
}

const splitByNewline = (str: string): string[] => {
  return str.split('\n')
}

const llElementToElement = (element: Span): Element => {
  return {
    type: 'element',
    className: element.properties.className.join(' '),
    value: (element.children[0] as llText)?.value ?? '',
  }
}

const llTextToText = (text: llText): Text => {
  return {
    type: 'text',
    value: text.value,
  }
}

const refineAST = (language: Language, text: string): Node[][] => {
  const ast = lowlight.highlight(language, text)

  const rows: Node[][] = []
  let nodeList: Node[] = []

  const exec = (children: (Span | llText)[]): void => {
    for (const tree of children) {
      if (tree.type === 'text') {
        if (hasNewline(tree.value)) {
          const tokens = splitByNewline(tree.value)

          for (const [i, token] of tokens.entries()) {
            nodeList.push(llTextToText({ type: 'text', value: token }))

            if (i < tokens.length - 1) {
              rows.push(nodeList)

              nodeList = []
            }
          }
        } else {
          nodeList.push(llTextToText(tree as llText))
        }
      }

      if (tree.type === 'element') {
        if (tree.children.length > 1) {
          exec(tree.children)
        } else {
          nodeList.push(llElementToElement(tree as Span))
        }
      }
    }
  }

  exec(ast.children)

  if (nodeList.length) {
    rows.push(nodeList)
  }

  return rows
}

const Pre: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <pre className='hljs'>{children}</pre>
}

const Row: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>
}

const Element: React.FC<{ children: ReactNode; className: string }> = ({
  children,
  ...props
}) => {
  return <span {...props}>{children}</span>
}

const Text: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <span>{children}</span>
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({
  language = 'js',
  text,
}) => {
  const rows = refineAST(language, text)

  return (
    <Pre>
      {rows.map((nodeList, i) => (
        <Row key={`row-${i}`}>
          {nodeList.map((node, i) =>
            node.type === 'element' ? (
              <Element key={`element-${i}`} className={node.className}>
                {node.value}
              </Element>
            ) : (
              <Text key={`text-${i}`}>{node.value}</Text>
            )
          )}
        </Row>
      ))}
    </Pre>
  )
}

export default CodeHighlight
