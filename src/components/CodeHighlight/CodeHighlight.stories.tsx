import { Meta, StoryObj } from '@storybook/react'
import CodeHighlight from './CodeHighlight'

const meta: Meta<typeof CodeHighlight> = {
  title: 'CodeHighlight',
  component: CodeHighlight,
}

type Story = StoryObj<typeof CodeHighlight>

const text = `const haha ={
  test: 'name',
  age: 1,
  arr: [
    '1',
    undefined
  ],
  obj: {
    1: 1,
    2: 2
  }
};`

export const Primary: Story = {
  render: () => {
    return <CodeHighlight text={text} />
  },
}

export default meta
