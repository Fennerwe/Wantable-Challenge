import './App.scss'

import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { ArtistProfile } from './pages/artist-profile/ArtistProfile'
import { Home } from './pages/home/Home'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/artist/:artistName" component={ArtistProfile} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </HashRouter>
  )
}

export default App
