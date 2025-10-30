console.log(varVariable); // undefined
console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization

var varVariable = 'I am var';
let letVariable = 'I am let';

/**
 * Explanation:
 * 
 * This demonstrates the Temporal Dead Zone (TDZ) in JavaScript.
 * 
 * 1. Variables declared with 'var' are hoisted to the top of their scope
 *    and initialized with 'undefined'. So accessing varVariable before
 *    its declaration returns undefined (no error).
 * 
 * 2. Variables declared with 'let' and 'const' are also hoisted, but they
 *    are NOT initialized. They remain in the "temporal dead zone" from the
 *    start of the block until the declaration is executed.
 * 
 * 3. Accessing letVariable before its declaration throws a ReferenceError
 *    because it's in the TDZ.
 * 
 * 4. The TDZ exists to catch programming errors and make code more predictable.
 * 
 * 5. The same behavior applies to 'const' declarations.
 * 
 * Best practice: Always declare variables at the top of their scope.
 */
