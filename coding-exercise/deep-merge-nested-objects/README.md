Deep-Merge Two Nested Objects (with Circular References)
Challenge:
Implement a deep-merge function that combines two nested JavaScript objects while safely handling circular references. The function must be immutable and able to merge objects, arrays, and nested structures.

Problem Description:
Deep merging means recursively combining the properties of two objects. When both inputs contain nested objects, arrays, or shared references, this becomes more complex.

Your task is to:
Merge all properties from both objects
Recursively merge nested objects
Merge arrays by index
Avoid infinite recursion when circular references exist
Return a new, immutable object
Ensure values from the second object override the first when conflicts occur
Real-World Use Case
State management libraries (Redux, Zustand, Immer)
Complex configuration merging
Deep cloning with overrides
Normalizing API responses
Merging schema definitions

Example:
Input
const a = { 
    x: 1,
    y: { z: 2 }
};
a.self = a; // circular reference

const b = { 
    y: { k: 20 },
    m: 100
};
b.loop = b; // circular reference

const result = deepMerge(a, b);

Output
{
    x: 1,
    y: { z: 2, k: 20 },
    m: 100,
    self: [circular],
    loop: [circular]
}

Requirements:
Must deep-merge nested objects and arrays
Must detect and safely handle circular references
Must not mutate inputs
When both objects contain the same key:
If both values are objects → recursively merge
If both are arrays → merge by index
Otherwise → value from second object overrides
Must create a brand-new object as the output

Key Concepts:
Recursion
WeakMap to track visited nodes
Object and array cloning
Circular reference detection
Immutability principles