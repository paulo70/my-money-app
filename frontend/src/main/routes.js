import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard-without-redux/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
  <Router history = { hashHistory }>
    <Route path='/' component = {Dashboard} />
    <Route path='/BillingCycles' component = {BillingCycle} />
    <Redirect from = '*' to='/' />
  </Router>
)
