while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);
  
  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}
// one or more numbers are output
// the last number output is 5
// 'Exiting...' is output once
// on each iteration:
// number is assigned to a random number between 0 and 9
// the number is output
// the if statement checks whether number is equal to 5
// if it is, it displays 'Exiting...' and then executes break to exit the loop
// if it isn't, then the loop repeats