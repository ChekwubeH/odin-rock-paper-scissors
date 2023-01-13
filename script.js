const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resultDisplay = document.querySelector('#result-text');
const optionButtons = document.querySelectorAll('.option-button');
const gameContainer = document.querySelector('#game-container');

let playerScore = 0;
let computerScore = 0;

function getComputerOption() {
  const options = ['ROCK', 'PAPER', 'SCISSORS'];
  randomOption = options[Math.floor(Math.random() * options.length)];
  return randomOption;
}

function checkRoundWinner(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    return 'TIE';
  } else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    return 'PLAYER WIN';
  } else {
    return 'COMPUTER WIN';
  }
}

function playRound(playerSelection, computerSelection) {
  const roundResult = checkRoundWinner(playerSelection, computerSelection);

  if (roundResult === 'TIE') {
    return `It's a TIE! You both choose ${playerSelection}`;
  } else if (roundResult === 'PLAYER WIN') {
    playerScore++;
    return `You WIN! ${playerSelection} beats ${computerSelection}`;
  } else if (roundResult === 'COMPUTER WIN') {
    computerScore++;
    return `You LOSE! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  
  optionButtons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.textContent;
    computerSelection = getComputerOption();
    resultDisplay.textContent = (playRound(playerSelection, computerSelection));
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    gameOver();
  }))
  
}

function gameOver() {

  const gameWinner = document.createElement('p');
  resultDisplay.append(gameWinner);

  if (playerScore === 5) {
    gameWinner.textContent = 'Player won this game!';
    optionButtons.forEach(elem => {
      elem.disabled = true;
    });
    
  } else if (computerScore === 5) {
    gameWinner.textContent = 'Computer won this game!';
    optionButtons.forEach(elem => {
      elem.disabled = true;
    });

  }
}

game();