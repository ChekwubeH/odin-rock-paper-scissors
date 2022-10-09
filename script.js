const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  randomOption = options[Math.floor(Math.random() * options.length)];
  return randomOption;
}

function getPlayerChoice() {
  let verifiedInput = false;
  while (verifiedInput === false) {
    const playerInput = prompt('Choose either ROCK, PAPER or SCISSORS').toLowerCase();
    if (playerInput === null) {
      continue;
    }
    if (options.includes(playerInput)) {
      verifiedInput = true;
      return playerInput;
    }
  }
}

function checkRoundWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'TIE';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
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
    return `You WIN! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You LOSE! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  console.log('Welcome to Rock Paper Scissors Game')

  for (let i = 0; i < 5; i++) {
    let round = `Round: ${i+1}`;
    console.log(round);
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    if (checkRoundWinner(playerSelection, computerSelection) === 'PLAYER WIN') {
      playerScore++;
    } else if (checkRoundWinner(playerSelection, computerSelection) === 'COMPUTER WIN') {
      computerScore++;
    }
  }

  console.log(`Player Score: ${playerScore} <-----> Computer Score: ${computerScore}`)

  if (playerScore > computerScore) {
    console.log('Player is the winner.');
  } else if (playerScore < computerScore) {
    console.log('Computer is the winner.');
  } else {
    console.log('There is no game winner. We have a tie.')
  }
}

game();