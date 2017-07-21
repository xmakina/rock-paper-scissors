/* eslint-env mocha */

let rps = require('../lib/rock-paper-scissors.js')

var assert = require('assert')
describe('when playing', function () {
  describe('with two players', function () {
    it('should return -1 when paper challenges scissors', function () {
      assert.equal(-1, rps('paper', 'scissors').score)
    })
    it('should return 1 when scissors challenges paper', function () {
      assert.equal(1, rps('scissors', 'paper').score)
    })
    it('should return 0 when scissors challenges scissors', function () {
      assert.equal(0, rps('scissors', 'scissors').score)
    })
    it('should return null when invalid challenge sent', function () {
      assert.equal(null, rps('lizard', 'rock').score)
    })
    it('should return null when invalid defence sent', function () {
      assert.equal(null, rps('rock', 'lizard').score)
    })
  })

  describe('with one player', function () {
    it('should return a response when paper challenges', function () {
      assert.notEqual(null, rps('paper').score)
    })
    it('should return null when no choice sent', function () {
      assert.equal(null, rps().score)
    })
    it('should return null when invalid choice sent', function () {
      assert.equal(null, rps('lizard').score)
    })
  })
})
