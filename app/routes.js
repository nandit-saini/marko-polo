'use strict';

// importing packages
var express    = require('express');
var router     = express.Router();

/*
 * Module dependencies.
 */

const markoPolo = require('../app/controllers/markoPolo');

router.get('/sequence', markoPolo.printSequence);

module.exports = router;
