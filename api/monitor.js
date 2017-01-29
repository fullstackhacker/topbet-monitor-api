'use strict;'

const request = require('request');
const router = require('express').Router();
const redis = require('../config').redis;

router.post('/bets', function(req, res){
  const title = req.body.title;
  const phoneNumber = req.body.phoneNumber;

  redis.client.get(title, function(err, bet){
    if (err){
      return res.status(500).json({
        status: false,
        message: 'Unexpected Error'
      });
    }

    if (!!bet){
      bet.listeners.append(phoneNumber);
      redis.client.set(title, bet, redis.printFunction);
      return res.json({
        status: true
      });
    }
    return res.status(500).json({
      status: false,
      message: 'Unrecognized Bet.'
    });
  });
});

module.exports = router;
