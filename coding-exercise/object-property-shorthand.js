const name = 'Alice';
const age = 30;

// Old way
const user1 = {
    name: name,
    age: age
};

// ES6 shorthand
const user2 = {
    name,
    age
};

console.log(user1); // { name: 'Alice', age: 30 }
console.log(user2); // { name: 'Alice', age: 30 }
console.log(user1.name === user2.name); // true

/**
 * Explanation:
 * 
 * This demonstrates ES6 object property shorthand syntax.
 * 
 * 1. When creating an object, if the property name matches the variable name,
 *    you can use the shorthand syntax.
 * 
 * 2. { name, age } is equivalent to { name: name, age: age }
 * 
 * 3. This makes code more concise and readable, especially when dealing with
 *    many properties.
 * 
 * 4. Both user1 and user2 are functionally identical.
 * 
 * This is commonly used in modern JavaScript, especially with destructuring
 * and when returning objects from functions.
 */
