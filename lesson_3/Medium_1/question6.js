let nanArray = [NaN];

console.log(nanArray[0] === NaN);

/* the output would be false. NaN is a special numeric value that indicates that
an operation was intended to return a number failed. Javascript does not let 
you use == and === to determine whether a value is NaN. To test whether a value
is NaN, we need to use the Number.isNaN() method*/

console.log(Number.isNaN(nanArray[0])); // this code outputs true