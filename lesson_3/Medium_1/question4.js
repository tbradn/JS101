/* Yes, there is a difference. While both functions have the same return value, 
the first implementation mutates the argument represented by buffer. 
That is, the caller will see that the array is different when the function returns. 
The rollingBuffer2 implementation doesn't mutate the argument specified by the value of buffer.*/