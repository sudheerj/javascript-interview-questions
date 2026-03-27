# JavaScript Interview FAQ — Basic

A compact set of common JavaScript interview questions with concise answers.

## 1. What is the event loop? How does it handle asynchronous callbacks?
The event loop checks the call stack; when empty it drains microtasks (promises) then runs one macrotask (e.g., `setTimeout`) and repeats.

## 2. Difference between `var`, `let`, and `const`
`var` is function-scoped and hoisted; `let`/`const` are block-scoped. `const` can't be reassigned.

## 3. Explain closures
A closure is a function that retains access to its lexical scope even when executed elsewhere — useful for private state.

## 4. `==` vs `===`
`==` coerces types before comparing; `===` is strict (no coercion).

## 5. How `this` is determined in JS?
Determined by call-site: default/global, object method (implicit), explicit (`call`/`apply`), `new`, or lexical for arrow functions.

## 6. Prototype vs class
`class` is syntax sugar over prototype-based inheritance. Objects inherit via the prototype chain.

## 7. Call, apply, bind
`call(thisArg, ...)`, `apply(thisArg, [args])` invoke immediately; `bind(thisArg)` returns a bound function.

## 8. Promises vs async/await
Promises represent eventual results; `async/await` is syntactic sugar for working with promises.

## 9. Microtasks vs Macrotasks
Microtasks (promises) run after the current stack but before the next macrotask (timers, I/O).

## 10. Hoisting
Function and `var` declarations are hoisted. `let`/`const` are hoisted but in TDZ until initialized.
