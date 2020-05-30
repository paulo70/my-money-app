const express = require('express')

module.exports = function(server) {
  // URL base all of routes
  const router = express.Router()
  server.use('/api', router)

  // Routes to payments cycle

  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}
