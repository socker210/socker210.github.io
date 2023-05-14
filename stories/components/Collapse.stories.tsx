import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import Collapse from 'components/Collapse'

export default {
  title: 'Component/Collapse',
  component: Collapse,
} as Meta

export const Primary: Story = () => {
  const [inProps, setInProps] = useState(false)

  return (
    <>
      <button onClick={() => setInProps(!inProps)}>HAHA</button>
      <Collapse>
        <h1>Hello world!</h1>
      </Collapse>
    </>
  )
}
