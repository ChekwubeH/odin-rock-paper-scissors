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

  optionButtons.forEach(button => button.addEventListener('mouseenter', () => {
    button.setAttribute('style', 'border:3px solid black');
  }));
  optionButtons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.textContent;
    computerSelection = getComputerOption();
    resultDisplay.textContent = (playRound(playerSelection, computerSelection));
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    gameOver();
  }));
  optionButtons.forEach(button => button.addEventListener('mouseleave', () => {
    button.setAttribute('style', 'border:none');
  }));
}

function gameOver() {

  const gameWinner = document.createElement('p');
  gameWinner.style.color = 'red';
  resultDisplay.append(gameWinner);

  if (playerScore === 5) {
    gameWinner.textContent = 'PLAYER WON THIS GAME!';
    optionButtons.forEach(elem => {
      elem.disabled = true;
      elem.setAttribute('style', 'background:lightgrey');
    });
    replay();
  } else if (computerScore === 5) {
    gameWinner.textContent = 'COMPUTER WON THIS GAME!';
    optionButtons.forEach(elem => {
      elem.disabled = true;
      elem.setAttribute('style', 'background:lightgrey');
    });
    replay();
  }
}

function replay() {
  replayButton = document.createElement('button');
  replayButton.textContent = 'REPLAY';
  replayButton.setAttribute('style', 
    'background-color:grey; border:none; width:100px; height:30px; border-radius:50px');
  gameContainer.append(replayButton);

  replayButton.addEventListener('mouseenter', () => {
    replayButton.setAttribute('style', 
      'background-color:grey; border:3px solid black; width:100px; height:30px; border-radius:50px');
  });

  replayButton.addEventListener('click', () => {
    location.reload();
  });

  replayButton.addEventListener('mouseleave', () => {
    replayButton.setAttribute('style', 'border:none');
  });
}

game();