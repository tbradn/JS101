let numbers = [1,2,3];
numbers[6] = 5;
// does not produce an error
numbers[4];
// will output undefined, but the slot is empty