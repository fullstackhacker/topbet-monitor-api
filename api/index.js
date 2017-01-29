'use strict;'

const router = require('express').Router();
const monitorRouter = require('./monitor');

router.get('/', function(req, res){
  return res.json({
    status: true
  });
});

router.use('/', monitorRouter);

module.exports = router;
