let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // => { first: [1, 2] } since numArray is a reference to the original array, [1], numArray.push(2) modifies this array.