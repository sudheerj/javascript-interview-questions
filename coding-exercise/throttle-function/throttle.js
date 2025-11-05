/**
 * Creates a throttled version of a function that only executes at most once
 * per specified time interval, regardless of how many times it's called.
 * 
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time interval in milliseconds between allowed executions
 * @returns {Function} A throttled version of the original function
 * 
 * @example
 * const throttledFn = throttle(() => console.log('Hello'), 1000);
 * throttledFn(); // Executes immediately
 * throttledFn(); // Ignored (within 1000ms)
 * throttledFn(); // Ignored (within 1000ms)
 * // After 1000ms, the next call will execute
 */
function throttle(func, limit) {
    // Track the last time the function was executed
    // This variable persists across multiple calls due to closure
    let lastExecuted = 0;
    
    // Track if there's a pending execution scheduled
    let timeoutId = null;
    
    // Return a new function that wraps the original function
    // ...args collects all arguments passed to this function
    return function(...args) {
        // Get the current timestamp
        const now = Date.now();
        
        // Calculate how much time has passed since last execution
        const timeSinceLastExecution = now - lastExecuted;
        
        // If enough time has passed, execute immediately
        if (timeSinceLastExecution >= limit) {
            // Update the last execution time
            lastExecuted = now;
            
            // Execute the original function with correct context and arguments
            // func.apply(this, args) ensures:
            // 1. 'this' context is preserved (important for object methods)
            // 2. All arguments are passed to the original function
            func.apply(this, args);
        } else {
            // If not enough time has passed, schedule execution for later
            // Clear any existing scheduled execution
            clearTimeout(timeoutId);
            
            // Calculate remaining time until next allowed execution
            const remainingTime = limit - timeSinceLastExecution;
            
            // Schedule the function to execute after the remaining time
            timeoutId = setTimeout(() => {
                lastExecuted = Date.now();
                func.apply(this, args);
            }, remainingTime);
        }
    };
}

// ============================================
// ALTERNATIVE IMPLEMENTATION: Leading Edge Only
// ============================================

/**
 * Simpler throttle implementation that only executes on the leading edge
 * (executes immediately, then ignores calls for the limit duration)
 * 
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time interval in milliseconds between allowed executions
 * @returns {Function} A throttled version of the original function
 */
function throttleLeading(func, limit) {
    let inThrottle = false;
    
    return function(...args) {
        // If not currently throttled, execute the function
        if (!inThrottle) {
            // Execute the function immediately
            func.apply(this, args);
            
            // Set throttle flag to true
            inThrottle = true;
            
            // Reset the throttle flag after the limit duration
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
        // If in throttle period, ignore the call
    };
}

// ============================================
// EXAMPLE USAGE: Scroll Event Handler
// ============================================

/**
 * Simulates a scroll position tracker
 * In a real application, this might update UI elements based on scroll position
 * 
 * @param {number} position - The current scroll position
 */
function handleScroll(position) {
    console.log(`Scroll position: ${position}px`);
    // In production, this might be:
    // - Updating a progress bar
    // - Loading more content (infinite scroll)
    // - Showing/hiding navigation elements
}

// Create a throttled version of handleScroll with 1000ms limit
// This means the handler will execute at most once per second
const throttledScroll = throttle(handleScroll, 1000);

// ============================================
// DEMONSTRATION: Simulating Rapid Scroll Events
// ============================================

console.log('User scrolls rapidly...\n');

// Simulate rapid scroll events (in reality, scroll events fire very frequently)
// With throttling, only some of these will actually execute
throttledScroll(100);   // Executes immediately (first call)
console.log('Called at 0ms\n');

setTimeout(() => {
    throttledScroll(200);   // Ignored (within 1000ms)
    console.log('Called at 200ms (ignored)\n');
}, 200);

setTimeout(() => {
    throttledScroll(300);   // Ignored (within 1000ms)
    console.log('Called at 400ms (ignored)\n');
}, 400);

setTimeout(() => {
    throttledScroll(400);   // Ignored (within 1000ms)
    console.log('Called at 600ms (ignored)\n');
}, 600);

setTimeout(() => {
    throttledScroll(500);   // Ignored (within 1000ms)
    console.log('Called at 800ms (ignored)\n');
}, 800);

setTimeout(() => {
    throttledScroll(600);   // Executes (1000ms has passed)
    console.log('Called at 1200ms (executes)\n');
}, 1200);

setTimeout(() => {
    throttledScroll(700);   // Ignored (within 1000ms of last execution)
    console.log('Called at 1400ms (ignored)\n');
}, 1400);

setTimeout(() => {
    throttledScroll(800);   // Executes (1000ms has passed since last execution)
    console.log('Called at 2400ms (executes)\n');
}, 2400);

// Expected output:
// Scroll position: 100px   (at 0ms - immediate)
// Scroll position: 600px   (at ~1200ms - after 1000ms interval)
// Scroll position: 800px   (at ~2400ms - after another 1000ms interval)
//
// Without throttling, handleScroll would have been called 8 times!
// With throttling, it's called only 3 times - reducing unnecessary executions by 62.5%

/**
 * Explanation:
 * 
 * This demonstrates the throttle pattern in JavaScript.
 * 
 * 1. Throttling limits the rate at which a function can execute.
 *    The function will execute at most once per specified time interval.
 * 
 * 2. When throttledScroll is called multiple times rapidly,
 *    it will only execute once per 1000ms (1 second).
 * 
 * 3. The first call executes immediately (leading edge).
 *    Subsequent calls within the time limit are either ignored or scheduled.
 * 
 * 4. Common use cases:
 *    - Scroll events: Update UI elements without overwhelming the browser
 *    - Mouse move: Track cursor position without excessive updates
 *    - Window resize: Recalculate layout at a controlled rate
 *    - API rate limiting: Ensure requests don't exceed API limits
 *    - Game loop: Limit frame rate or action frequency
 * 
 * 5. Benefits:
 *    - Improves performance by limiting function execution frequency
 *    - Prevents browser lag from excessive event handlers
 *    - Ensures consistent execution intervals
 *    - Reduces server load from API calls
 * 
 * 6. The function uses closures to maintain lastExecuted and timeoutId across calls.
 * 
 * 7. func.apply(this, args) ensures the original function is called with
 *    the correct context and arguments.
 * 
 * THROTTLE vs DEBOUNCE:
 * 
 * - **Throttle**: Executes the function at regular intervals (e.g., once per second)
 *   regardless of how many times it's called. Guarantees execution at a steady rate.
 *   Example: Scroll handler that updates every 100ms while scrolling.
 * 
 * - **Debounce**: Executes the function only after calls have stopped for a specified
 *   period. Delays execution until activity ceases.
 *   Example: Search input that waits 500ms after user stops typing.
 * 
 * Use throttle when you want regular updates during continuous activity.
 * Use debounce when you want to wait for activity to stop.
 */
