'use strict;'

const redis = require('redis');

const redisConnectionOptions = {
  db: 1
};

const redisClient = redis.createClient(redisConnectionOptions);

if (process.env.NODE_ENV === 'test'){
  redisClient.unref();
}

module.exports = {
  client: redisClient,
  printFunction: redis.print
}
