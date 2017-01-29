'use strict';

const test = require('tape');
const request = require('supertest');

const app = require('../app');


test('GET /', assert => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const expectedResponse = {status: true};
      assert.deepEqual(res.body, expectedResponse);
      assert.end();
    });
});

test('POST /bets -- Invalid Bet', assert => {
  const payload = {
    title: "invalid game title",
    phoneNumber: "123-123-1234"
  };

  request(app)
    .post('/bets')
    .send(payload)
    .expect(500)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const expectedResponse = {status: false, message: "Unrecognized Bet."};
      assert.deepEqual(res.body, expectedResponse);
      assert.end();
    });
});
