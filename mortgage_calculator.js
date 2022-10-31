// ask the user for the loan amount
// ask the user for the APR
// ask the user for the duration of the loan

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`-> ${msg}`);
}

function isValidNumber(num) {
  return !(num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) <= 0);
}

function isValidBoolean(char) {
  return !(char !== 'y' && char !== 'n');
}

function getInput(strPrompt, strInvalidPrompt, conditional) {
  prompt(strPrompt);
  let returnVal = readline.question();
  if (conditional(returnVal)) {
    return returnVal;
  }
  while (true) {
    prompt(strInvalidPrompt);
    returnVal = readline.question();
    if (conditional(returnVal)) {
      return returnVal;
    }
  }
}

function mortgageCalculator() {

  prompt('Welcome to my Mortgage Calculator!');

  let loanAmount = getInput('What is your loan amount?','Please enter a valid loan amount.', isValidNumber);

  let durationYears = getInput('How many years is your desired loan duration?', 'Please enter a valid number of years.', isValidNumber);

  let durationMonths = durationYears * 12;

  let apr = getInput('What is your Annual Percentage Rate (APR)?', 'Please enter a valid Annual Percentage Rate.', isValidNumber);

  let monthlyApr = apr / 100 / 12;

  let monthlyPayment = loanAmount * (monthlyApr / (1 - Math.pow(
    (1 + monthlyApr), (-durationMonths))));

  prompt(`Your mortgage payment would be $${monthlyPayment.toFixed(2)} per month.`);

  let response = getInput('Would you like to make another calculation? (y/n)', 'Please enter (y/n).', isValidBoolean);

  return response === 'y';
}

while (mortgageCalculator()) {
  continue;
}