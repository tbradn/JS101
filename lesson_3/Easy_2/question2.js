let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse(); // reverses the order of the array without mutating the original

let moreNumbers = [1, 2, 3, 4, 5];
let sortedMoreNumbers = [...moreNumbers].sort((num1, num2) => num2 - num1); // reverses the order of the array without mutating the original