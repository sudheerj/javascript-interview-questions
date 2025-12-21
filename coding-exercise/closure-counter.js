function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1
console.log(counter1()); // 3

/**
 * Explanation:
 * 
 * This demonstrates closure behavior in JavaScript.
 * 
 * 1. createCounter() returns a function that has access to the 'count' variable
 *    from its outer scope, even after createCounter() has finished executing.
 * 
 * 2. Each call to createCounter() creates a new closure with its own 'count' variable.
 *    So counter1 and counter2 maintain separate counts.
 * 
 * 3. counter1() increments its own count: 1, 2, 3
 *    counter2() has its own separate count: 1
 * 
 * This is a classic example of how closures can be used to create private variables.
 */
