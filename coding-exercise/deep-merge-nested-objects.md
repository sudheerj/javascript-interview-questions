# Exercise: Deep-Merge Two Nested Objects With Circular References

### Problem Statement

Write a function **`deepMerge(objA, objB)`** that merges two JavaScript objects **without mutating** either of the original objects.

The function must follow these rules:

1. If a property exists in only one object, take that value.
2. If the property exists in both objects:
   - If both values are **plain objects**, recursively merge them.
   - If both values are **arrays**, concatenate them.
   - Otherwise, the value from **objB** overwrites the one from **objA**.
3. Handle **circular references** safely.  
   If you encounter the same reference path again, avoid infinite recursion.
4. Ensure the merge is **immutable** — return a **new** object.
5. Ensure the solution runs in **O(n)** time where *n* is the total number of properties.

---

### Example:

```js
const a = { 
    x: { y: 1 },
    arr: [1, 2],
};
a.self = a; // Circular reference

const b = { 
    x: { z: 2 },
    arr: [3],
    extra: true 
};
b.loop = b; // Circular reference

const result = deepMerge(a, b);

/*
Expected structure:

{
  x: { y: 1, z: 2 },
  arr: [1, 2, 3],
  extra: true,
  self: <circular ref>,
  loop: <circular ref>
}
*/
