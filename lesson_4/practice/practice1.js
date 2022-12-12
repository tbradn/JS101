let str = 'The grass is green';

console.log(str.slice(4,9));

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

console.log(arr.slice(2, 5)[0]);

let string = 'blaster';

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalize('blaster'));