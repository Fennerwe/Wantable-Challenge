import React from 'react'
import './App.scss'
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom'
import { Home } from './pages/home/Home'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
