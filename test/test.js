/* eslint-env mocha */

let rps = require('../lib/rock-paper-scissors.js')

var assert = require('assert')
describe('Rock Paper Scissors', function () {
  describe('playing', function () {
    it('should return -1 when paper challenges scissors', function () {
      assert.equal(-1, rps('paper', 'scissors').score)
    })
  })
})
