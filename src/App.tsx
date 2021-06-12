import React from 'react'
import { render } from 'react-dom'
import './styles/styles.css'

const str = 'Hello World!'

const App: React.FC = () => {
  return <h1>{str}</h1>
}

const container = document.getElementById('react-root')

render(<App />, container)
