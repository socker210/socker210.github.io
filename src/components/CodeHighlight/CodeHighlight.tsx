'use client'

import { useState, useEffect, ReactNode } from 'react'
import { lowlight } from 'lowlight'
import type { Span, Text as llText } from 'lowlight/lib/core'
import './theme.css'

interface CodeHighlightProps {
  text: string
}

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

const LANGUAGE = 'js'

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

const refineAST = (text: string): Node[][] => {
  const ast = lowlight.highlight(LANGUAGE, text)

  const rows: Node[][] = []
  let nodeList: Node[] = []

  for (const tree of ast.children) {
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
      nodeList.push(llElementToElement(tree as Span))
    }
  }

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

const CodeHighlight: React.FC<CodeHighlightProps> = ({ text }) => {
  const [rows, setRows] = useState<Node[][]>([])

  useEffect(() => {
    setRows(refineAST(text))
  }, [text])

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
