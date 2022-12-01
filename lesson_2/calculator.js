// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);

while(true){

prompt(MESSAGES['number1']);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(MESSAGES['invalidNum']);
  number1 = readline.question();
}

prompt(MESSAGES['number2']);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(MESSAGES['invalidNum']);
  number2 = readline.question();
}

prompt(MESSAGES['operation']);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(MESSAGES['selection']);
  operation = readline.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(MESSAGES["result"]+ `${output}.`);

prompt('Would you like to perform another operation? (y/n)');
let answer = readline.question();

if (answer !== 'y') break;
}