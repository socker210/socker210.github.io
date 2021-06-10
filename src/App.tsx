import React from 'react'
import { render } from 'react-dom'

const App: React.FC = () => {
  return <h1>Hello World!</h1>
}

const container = document.getElementById('react-root')

render(<App />, container)
