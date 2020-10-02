var express = require('express')
  , router = express.Router()
  , eventsController = require('../controller/events.controller');

router.get('/incoming', eventsController.incommingEvents);

router.get('/outgoing',eventsController.outgoingEvents);

router.get('/view',eventsController.viewEvents);

module.exports = router;

