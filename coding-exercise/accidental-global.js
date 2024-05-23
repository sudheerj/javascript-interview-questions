function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y); //  1, undefined, number

/**
 * Here's the breakdown:
    1. Inside the foo function, x is declared using let, which means it's scoped to the function. However, y is not declared with let or var, so it becomes a global variable.

    2. When x = y = 0; is executed, it's interpreted as x = (y = 0);, which initializes y as a global variable with the value of 0, and x as a local variable within the function with the value of 0.

    3. x++ increments the local variable x by 1, making it 1.

    4. y++ increments the global variable y by 1, making it 1 as well.

    5. The function returns the value of x, which is 1.
    
    However, x is scoped within the function, so typeof x outside of the function will result in undefined.
    y is a global variable, so typeof y outside of the function will result in number.
 */
