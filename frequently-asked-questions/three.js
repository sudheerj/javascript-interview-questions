//Write a function to return the nth Fibonacci number.

function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
     