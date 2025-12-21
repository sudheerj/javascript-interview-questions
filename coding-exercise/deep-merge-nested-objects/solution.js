/**
 * Deeply merges two objects while safely handling circular references.
 * Returns a new object without mutating the originals.
 *
 * @param {Object|Array} obj1
 * @param {Object|Array} obj2
 * @returns {Object|Array}
 */
function deepMerge(obj1, obj2, visited = new WeakMap()) {
    // If obj2 is primitive, return it directly
    if (obj2 === null || typeof obj2 !== "object") {
        return obj2;
    }

    // Detect circular reference
    if (visited.has(obj2)) {
        return visited.get(obj2);
    }

    // Determine output type
    const output = Array.isArray(obj1) ? [...obj1] :
                   Array.isArray(obj2) ? [...obj2] :
                   { ...obj1 };

    visited.set(obj2, output);

    for (const key in obj2) {
        if (!obj2.hasOwnProperty(key)) continue;

        const val1 = obj1 ? obj1[key] : undefined;
        const val2 = obj2[key];

        if (val1 !== undefined && typeof val1 === "object" && typeof val2 === "object") {
            output[key] = deepMerge(val1, val2, visited);
        } else {
            output[key] = val2;
        }
    }

    return output;
}

// Example usage
const a = { x: 1, y: { z: 2 } };
a.self = a;

const b = { y: { k: 20 }, m: 100 };
b.loop = b;

console.log(deepMerge(a, b));
