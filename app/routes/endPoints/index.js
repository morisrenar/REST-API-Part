var base = process.env.PWD;
var express = require('express');
var router = express.Router();
var dummyController = require(base + '/app/controllers/dummyController');

router.get('/', dummyController.dummyRoute);

module.exports = router;