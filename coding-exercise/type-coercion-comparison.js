console.log([] == false);  // true
console.log([] === false); // false
console.log('' == 0);      // true
console.log('' === 0);     // false
console.log(null == undefined);  // true
console.log(null === undefined); // false

/**
 * Explanation:
 * 
 * This demonstrates type coercion with == vs === in JavaScript.
 * 
 * 1. == (loose equality) performs type coercion before comparison.
 *    === (strict equality) does NOT perform type coercion.
 * 
 * 2. [] == false:
 *    - [] is converted to a primitive: [].toString() = ''
 *    - false is converted to a number: 0
 *    - '' is converted to a number: 0
 *    - 0 == 0 is true
 * 
 * 3. [] === false:
 *    - No coercion, different types (object vs boolean), so false
 * 
 * 4. '' == 0:
 *    - '' is coerced to 0, so 0 == 0 is true
 * 
 * 5. '' === 0:
 *    - Different types (string vs number), so false
 * 
 * 6. null == undefined:
 *    - Special case in JavaScript, they are loosely equal
 * 
 * 7. null === undefined:
 *    - Different types, so false
 * 
 * Best practice: Use === to avoid unexpected type coercion bugs.
 */
