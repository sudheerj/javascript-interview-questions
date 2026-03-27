# JavaScript Interview FAQ — Advanced

Advanced topics and answers for deeper interview prep.

## 1. Event loop internals & rendering
Describe microtask checkpoints, raf (requestAnimationFrame) ordering, and how long tasks block rendering.

## 2. Memory leaks & profiling
Common leaks: listeners not removed, closures holding big objects, forgotten timers. Use Chrome DevTools → Memory tab (heap snapshots, allocation instrumentation).

## 3. Streams (Node & Web)
Readable/Writable/Transform streams, piping, backpressure handling, and when to use streams vs buffering.

## 4. Node event loop & worker threads
Phases of Node event loop, libuv threadpool, difference between worker threads and child processes.

## 5. Module systems, static analysis, tree-shaking
ESM supports static imports enabling tree-shaking; CommonJS is dynamic and synchronous.

## 6. Security basics (XSS, CSP)
XSS types (reflected, stored, DOM), sanitize inputs, use Content Security Policy to mitigate inline-script risks.

## 7. Performance: repaint/reflow & layout thrashing
Batch DOM reads and writes, avoid forced synchronous layouts, use `requestAnimationFrame` for animation updates.

## 8. WeakMap / WeakRef use-cases
WeakMap for metadata on objects without preventing GC; WeakRef for caching with ephemeral references (use carefully).

## 9. Advanced ES features: proxies, symbols, decorators (stage)
Use-cases for proxy traps, customizing iteration with symbols, decorators for meta-programming (proposal stage changes).

## 10. Concurrency patterns: atomicity & locking (worker patterns)
Use worker threads / web workers for CPU heavy tasks, message-passing for shared-nothing concurrency, Atomics + SharedArrayBuffer for low-level sync.
