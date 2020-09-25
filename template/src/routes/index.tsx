import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PrivateRoute from 'components/PrivateRoute'
import BackgroundService from 'components/BackgroundService'

import Splash from './Splash'
import Intro from './Intro'
import Login from './Login'
import Sms from './Sms'
import Home from './Home'
import Packages from './Packages'
import Purchase from './Purchase'
import Factor from './Factor'

function Navigation() {
  return (
    <BrowserRouter>
      <BackgroundService />
      <Switch>
        <Route restricted path="/" exact>
          <Splash />
        </Route>
        <Route restricted path="/intro" exact>
          <Intro />
        </Route>
        <Route restricted path="/login" exact>
          <Login />
        </Route>
        <Route restricted path="/sms" exact>
          <Sms />
        </Route>
        <PrivateRoute path="/home" exact>
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/packages" exact>
          <Packages />
        </PrivateRoute>
        <PrivateRoute path="/purchase" exact>
          <Purchase />
        </PrivateRoute>
        <PrivateRoute path="/factor" exact>
          <Factor />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation
