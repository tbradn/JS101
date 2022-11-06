const readline = require('readline-sync');
let userWins = 0;
let computerWins = 0;

const VALID_USER_CHOICES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock',
};

function simplifyChoice(choice) {
  return VALID_USER_CHOICES[choice] || choice;
}

let prompt = (msg) => console.log(`-> ${msg}`);

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
    return 'User';
  } else if (choice === computerChoice) {
    prompt("It's a draw!");
    return '';
  } else {
    prompt('The computer wins!');
    return 'Computer';
  }
}

function displayWinCount(strWinner) {
  if (strWinner === 'User') {
    userWins++;
  } else if (strWinner === 'Computer') {
    computerWins++;
  }
  console.log(`User wins: ${userWins}\nComputer wins: ${computerWins}`);
  if ((userWins >= 3) || (computerWins >= 3)) {
    console.log(`${strWinner} has won 3 out of 5 rounds.`);
    return true;
  }
  return false;
}

function getUserChoice() {
  prompt(`Choose one: ${Object.values(VALID_USER_CHOICES).join(', ')}`);
  let choice = readline.question();
  choice = simplifyChoice(choice.toLowerCase());
  console.clear();

  while (!Object.values(VALID_USER_CHOICES).includes(choice)) {
    prompt("That's not a valid choice.\nPlease enter (r)ock, (p)aper, (sc)issors, (l)izard, or (sp)ock.");
    choice = simplifyChoice(readline.question().toLowerCase());
  }
  return choice;
}

function getComputerChoice () {
  let randomIndex = Math.floor(
    Math.random() * Object.values(VALID_USER_CHOICES).length);
  let computerChoice = Object.values(VALID_USER_CHOICES)[randomIndex];
  return computerChoice;
}

function playGame() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  let strWinner = displayWinner(userChoice, computerChoice);

  if (displayWinCount(strWinner)) {
    return false;
  }

  prompt('Would you like to continue? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'y') return true;
  return false;
}

function main() {
  prompt('Welcome to my rock, paper, scissors, lizard, spock game!');

  while (playGame()) {
    console.clear();
  }
}

main();


