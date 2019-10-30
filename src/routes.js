import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import New from './pages/New'
import history from './services/history'

export default function Routes() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/new" exact component={New} />
      </Switch>
    </BrowserRouter>
  );
}
