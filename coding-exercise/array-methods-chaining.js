const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(num => num % 2 === 0)  // [2, 4, 6, 8, 10]
    .map(num => num * 2)            // [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0); // 60

console.log(result); // 60

/**
 * Explanation:
 * 
 * This demonstrates method chaining with array methods in JavaScript.
 * 
 * 1. filter() creates a new array with elements that pass the test.
 *    Here, it keeps only even numbers: [2, 4, 6, 8, 10]
 * 
 * 2. map() creates a new array by transforming each element.
 *    Here, it doubles each number: [4, 8, 12, 16, 20]
 * 
 * 3. reduce() reduces the array to a single value.
 *    Here, it sums all numbers: 4 + 8 + 12 + 16 + 20 = 60
 * 
 * 4. Each method returns a new array (except reduce), allowing chaining.
 * 
 * 5. This functional programming style is concise and readable.
 * 
 * Note: Each method creates a new array, so for large datasets, consider
 * performance implications. A single loop might be more efficient.
 */
