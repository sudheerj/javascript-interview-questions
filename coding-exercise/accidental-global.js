function foo() {
  let x = (y = 0); // ⚠️ y becomes a global variable
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);
// Output: 1, "undefined", "number"

/**
 * Explanation:
 *
 * 1. `x` is declared using `let`, so it is scoped to the `foo` function.
 *
 * 2. `y` is NOT declared using `let`, `var`, or `const`.
 *    This causes `y` to become a global variable.
 *
 * 3. The expression `x = (y = 0)` is evaluated right to left:
 *    - `y` is assigned `0` (global)
 *    - `x` is assigned the value of `y` (local)
 *
 * 4. `x++` increments the local variable `x` → 1
 *
 * 5. `y++` increments the global variable `y` → 1
 *
 * 6. The function returns `x`, which is `1`.
 *
 * Outside the function:
 * - `typeof x === "undefined"` (x is function-scoped)
 * - `typeof y === "number"` (y is global)
 */