import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as routes from 'routes.config'
import PageNotFound from './PageNotFound'
import './app.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Object.values(routes).map((route, i) => {
          return <Route key={i} {...route} />
        })}
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

const container = document.getElementById('react-root')

render(<App />, container)
