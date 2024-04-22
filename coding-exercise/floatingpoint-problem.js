console.log(0.1 + 0.2 === 0.3);
/**
 * 
 * The output of this code will be false.

    This is because of floating-point arithmetic in JavaScript. Floating-point numbers are stored in binary format in computers, and not all decimal numbers can be represented precisely in binary.

    So, when you add 0.1 and 0.2, the result might not be exactly 0.3 due to rounding errors in the binary representation. Therefore, 0.1 + 0.2 will not be equal to 0.3 in JavaScript.
 */
