(function () {
  const ROCK = 1
  const PAPER = 2
  const SCISSORS = 3

  function play (playerChoice, aiChoice) {
    if (playerChoice === undefined) {
      return result(null, 'You must choose rock, paper, or scissors')
    }

    playerChoice = getChoice(playerChoice)

    if (playerChoice === null) {
      return result(null, 'You must choose rock, paper, or scissors')
    }

    if (aiChoice === undefined) {
      aiChoice = Math.floor(Math.random() * 3 + 1)
    } else {
      aiChoice = getChoice(aiChoice)
    }

    if (aiChoice === null) {
      return result(null, 'You must choose rock, paper, or scissors')
    }

    switch (playerChoice) {
      case ROCK:
        return aiChoice === ROCK ? result(0, 'Your Rock ties with my Rock')
        : aiChoice === PAPER ? result(-1, 'Your Rock loses to my Paper')
        : result(1, 'Your Rock beats my Scissors')
      case PAPER:
        return aiChoice === ROCK ? result(1, 'Your Paper beats my Rock')
        : aiChoice === PAPER ? result(0, 'Your Paper ties with my Paper')
        : result(-1, 'Your Paper loses to my Scissors')
      case SCISSORS:
        return aiChoice === ROCK ? result(-1, 'Your Scissors loses to my Rock')
        : aiChoice === PAPER ? result(1, 'Your Scissors beats my Paper')
        : result(0, 'Your Paper ties with my Paper')
    }
  }

  function result (score, message) {
    return {score: score, message: message}
  }

  function getChoice (choice) {
    switch (choice.toLowerCase()) {
      case 'rock':
        return ROCK
      case 'paper':
        return PAPER
      case 'scissors':
        return SCISSORS
      default:
        return null
    }
  }

  module.exports = play
}())
