function deepClone(value, hash = new WeakMap()) {
    // Handle primitives
    if (value === null || typeof value !== "object") return value;

    // Handle circular references
    if (hash.has(value)) return hash.get(value);

    // Handle Date
    if (value instanceof Date) return new Date(value);

    // Handle RegExp
    if (value instanceof RegExp) return new RegExp(value);

    // Handle Arrays or Objects
    const clone = Array.isArray(value) ? [] : {};

    // Store reference in WeakMap (for circular structures)
    hash.set(value, clone);

    // Recursively clone properties
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            clone[key] = deepClone(value[key], hash);
        }
    }

    return clone;
}
