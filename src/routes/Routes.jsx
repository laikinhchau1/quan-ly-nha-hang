import React from 'react'

import { Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
const Routes = () => {
  return (
    <Switch>
        <Route path='/' exact element={Home} />
    </Switch>
  )
}
export default Routes