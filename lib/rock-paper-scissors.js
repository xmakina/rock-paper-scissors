function play (playerChoice) {
  const ROCK = 1
  const PAPER = 2
  const SCISSORS = 3

  switch (playerChoice.toLowerCase()) {
    case 'rock':
      playerChoice = ROCK
      break
    case 'paper':
      playerChoice = PAPER
      break
    case 'scissors':
      playerChoice = SCISSORS
      break
    default:
      return result(null, 'You must choose rock, paper, or scissors')
  }

  var aiChoice = Math.floor(Math.random() * 3 + 1)
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

module.exports = play
