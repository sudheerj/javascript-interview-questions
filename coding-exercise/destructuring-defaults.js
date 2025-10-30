function displayUser({ name = 'Guest', age = 18, country } = {}) {
    console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}

displayUser({ name: 'John', age: 25, country: 'USA' }); 
// Name: John, Age: 25, Country: USA

displayUser({ name: 'Alice' }); 
// Name: Alice, Age: 18, Country: undefined

displayUser(); 
// Name: Guest, Age: 18, Country: undefined

/**
 * Explanation:
 * 
 * This demonstrates destructuring with default values in JavaScript.
 * 
 * 1. The function parameter uses object destructuring to extract properties.
 * 
 * 2. Default values (name = 'Guest', age = 18) are provided for some properties.
 *    If these properties are not passed or are undefined, the defaults are used.
 * 
 * 3. The = {} at the end provides a default empty object if no argument is passed,
 *    preventing a TypeError when trying to destructure undefined.
 * 
 * 4. country has no default, so it remains undefined if not provided.
 * 
 * This pattern is useful for functions with optional parameters.
 */
