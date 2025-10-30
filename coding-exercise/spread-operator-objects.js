const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3); // { a: 1, b: 3, c: 4 }

const original = { x: 1, y: { z: 2 } };
const copy = { ...original };

copy.x = 10;
copy.y.z = 20;

console.log(original.x); // 1
console.log(original.y.z); // 20

/**
 * Explanation:
 * 
 * This demonstrates the spread operator with objects in JavaScript.
 * 
 * 1. The spread operator (...) copies properties from one object to another.
 * 
 * 2. When spreading multiple objects with the same property (like 'b'),
 *    the last one wins. So obj2.b (3) overwrites obj1.b (2).
 * 
 * 3. The spread operator creates a SHALLOW copy, not a deep copy.
 * 
 * 4. Primitive values (like x) are copied by value, so changing copy.x
 *    doesn't affect original.x.
 * 
 * 5. Nested objects (like y) are copied by reference, so changing copy.y.z
 *    DOES affect original.y.z.
 * 
 * For deep copying, you need JSON.parse(JSON.stringify()) or a library like lodash.
 */
