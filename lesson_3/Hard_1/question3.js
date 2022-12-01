function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/* A) one is: one
      two is: two
      three is: three
   B) one is: onw
      two is: two
      three is: three
   c) one is:two
      two is: three
      three is: one
*/