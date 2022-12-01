function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/* when you omit the semicolon javascript will insert them where it thinks you
need them. in the 'second' function javascipt would insert a semicolon after the
word return. so the function would return 'undefined'
*/