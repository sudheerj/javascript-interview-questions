# Exercise: Deep-Merge Two Nested Objects (with Circular References)

## Problem Statement

Write a function **`deepMerge(objA, objB)`** that deeply merges two JavaScript objects **without mutating** either of them.  
The function must correctly merge nested structures and safely handle circular references.

---

## Rules

1. If a key exists only in one object → copy that value.
2. If a key exists in both objects:
   - If both values are **plain objects**, recursively merge them.
   - If both values are **arrays**, merge by index (element-wise).
   - Otherwise, the value from **`objB`** overrides the value from **`objA`**.
3. Handle **circular references** using a tracking mechanism like **WeakMap**.
4. Always return a **new**, immutable object.
5. Must preserve structure even when circular references appear on both inputs.

---

## Example

```js
const a = {
    x: { y: 1 },
    arr: [1, 2]
};
a.self = a; // circular

const b = {
    x: { z: 2 },
    arr: [3],
    extra: true
};
b.loop = b; // circular

const result = deepMerge(a, b);

/*
Expected structure:

{
  x: { y: 1, z: 2 },
  arr: [1, 3],   // merged by index
  extra: true,
  self: <circular>,
  loop: <circular>
}
*/
