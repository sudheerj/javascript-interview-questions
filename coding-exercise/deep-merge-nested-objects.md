# Exercise: Deep-Merge Two Nested Objects With Circular References

### Problem Statement

Write a function **`deepMerge(objA, objB)`** that merges two JavaScript objects **without mutating** either of the original objects.

The function must follow these rules:

1. If a property exists only in one object, return that value.
2. If both objects contain the same key:
   - If both values are **plain objects**, recursively merge them.
   - If both values are **arrays**, concatenate them.
   - Otherwise, the value from **objB** overwrites the value from **objA**.
3. Handle **circular references** safely using a `WeakMap` to track already merged objects.
4. The merge must be **immutable** — return a **new** object.

---

### Example

```js
const firstObject = {
  x: { y: 1 },
  arr: [1, 2],
};
firstObject.self = firstObject; // Circular reference

const secondObject = {
  x: { z: 2 },
  arr: [3],
  extra: true,
};
secondObject.loop = secondObject; // Circular reference

const result = deepMerge(firstObject, secondObject);

/*
Expected output:

{
  x: { y: 1, z: 2 },
  arr: [1, 2, 3],
  extra: true,
  self: <circular ref>,
  loop: <circular ref>
}
*/

