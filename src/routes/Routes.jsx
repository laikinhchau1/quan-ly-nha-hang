import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { Header } from '../components/Header'
export const Routes = () => {
  return (
    <Switch>
        <Route path='/' exact component={Header} />
    </Switch>
  )
}
