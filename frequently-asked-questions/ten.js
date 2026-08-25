//Write a function to find the factorial of a number.

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
      