const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanScoreNumber = 0
let machineScoreNumber = 0

// humanScoreNumber -> Camel Case
// human_score_number -> Snake Case


const GAME_OPTIONS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors'
}

const playGame = (humanChoice) => {
  gameResult(humanChoice, playMachine())
};

const playMachine = () => {
  const choices = ['GAME_OPTIONS.ROCK', 'GAME_OPTIONS.PAPER', 'GAME_OPTIONS.SCISSORS'];
  const choiceResult = Math.floor(Math.random() * 3)
  return choices[choiceResult]
}

const gameResult = (human, machine) => {
//   console.log('Humano: ' + human + ' Máquina: ' + machine)

  if (human === machine) {
    result.innerHTML = 'Empate'
  } else if (
    (human === 'GAME_OPTIONS.ROCK' && machine === 'GAME_OPTIONS.SCISSORS') ||
    (human === 'GAME_OPTIONS.PAPER' && machine === 'GAME_OPTIONS.ROCK') ||
    (human === 'GAME_OPTIONS.SCISSORS' && machine === 'GAME_OPTIONS.PAPER')
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = 'Você Venceu'
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = 'Máquina Venceu'
  }
}
