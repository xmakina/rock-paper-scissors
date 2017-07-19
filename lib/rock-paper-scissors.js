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
      return 'You must choose rock, paper, or scissors'
  }

  var aiChoice = Math.floor(Math.random() * 3 + 1)
  // 1 = rock, 2 = paper, 3 = scissors
  switch (playerChoice) {
    case ROCK:
      return aiChoice === ROCK ? 0
        : aiChoice === PAPER ? -1
        : 1
    case PAPER:
      return aiChoice === ROCK ? 1
        : aiChoice === PAPER ? 0
        : -1
    case SCISSORS:
      return aiChoice === ROCK ? -1
        : aiChoice === PAPER ? 1
        : 0
  }
}

module.exports = play
