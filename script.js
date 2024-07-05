const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanScoreNumber = 0
let machineScoreNumber = 0

const playGame = (humanChoice) => {
  gameResult(humanChoice, playMachine())
};

const playMachine = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const choiceResult = Math.floor(Math.random() * 3)
  return choices[choiceResult]
}

const gameResult = (human, machine) => {
//   console.log('Humano: ' + human + ' Máquina: ' + machine)

  if (human === machine) {
    result.innerHTML = 'Empate'
  } else if (
    (human === 'rock' && machine === 'scissors') ||
    (human === 'paper' && machine === 'rock') ||
    (human === 'scissors' && machine === 'paper')
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
