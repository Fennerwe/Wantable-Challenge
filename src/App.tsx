import './App.scss'

import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import { ArtistProfile } from './pages/artist-profile/ArtistProfile'
import { Home } from './pages/home/Home'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/artist/:artistName" component={ArtistProfile} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
