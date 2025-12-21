/**
 * Creates a debounced version of a function that delays its execution
 * until after a specified delay has elapsed since the last time it was invoked.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds to wait before executing the function
 * @returns {Function} A debounced version of the original function
 * 
 * @example
 * const debouncedFn = debounce(() => console.log('Hello'), 300);
 * debouncedFn(); // Won't execute immediately
 * debouncedFn(); // Resets the timer
 * debouncedFn(); // Only this call will execute after 300ms
 */
function debounce(func, delay) {
    // Store the timeout ID in closure scope
    // This variable persists across multiple calls to the returned function
    let timeoutId;
    
    // Return a new function that wraps the original function
    // ...args collects all arguments passed to this function
    return function(...args) {
        // Clear the previous timeout if it exists
        // This prevents the previous scheduled execution from running
        // Each new call "resets the timer"
        clearTimeout(timeoutId);
        
        // Schedule a new timeout to execute the function after the delay
        // This creates a new timer that will execute after 'delay' milliseconds
        timeoutId = setTimeout(() => {
            // Execute the original function with the correct context and arguments
            // func.apply(this, args) ensures:
            // 1. 'this' context is preserved (important for object methods)
            // 2. All arguments are passed to the original function
            func.apply(this, args);
        }, delay);
    };
}

// ============================================
// EXAMPLE USAGE: Search Input Handler
// ============================================

/**
 * Simulates a search API call handler
 * In a real application, this would make an HTTP request to a search API
 * 
 * @param {string} query - The search query string
 */
function handleSearch(query) {
    console.log(`Searching for: ${query}`);
    // In production, this would be something like:
    // fetch(`/api/search?q=${query}`).then(...)
}

// Create a debounced version of handleSearch with 500ms delay
// This means the actual search will only execute 500ms after the user stops typing
const debouncedSearch = debounce(handleSearch, 500);

// ============================================
// DEMONSTRATION: Simulating Rapid User Input
// ============================================

console.log('User types rapidly...');

// Each call below happens almost instantly (simulating fast typing)
// But only the LAST call will actually execute after 500ms
debouncedSearch('J');        // Timer starts, will be cancelled
debouncedSearch('Ja');       // Previous timer cancelled, new timer starts
debouncedSearch('Jav');      // Previous timer cancelled, new timer starts
debouncedSearch('Java');     // Previous timer cancelled, new timer starts
debouncedSearch('JavaS');    // Previous timer cancelled, new timer starts
debouncedSearch('JavaSc');   // Previous timer cancelled, new timer starts
debouncedSearch('JavaScr');  // Previous timer cancelled, new timer starts
debouncedSearch('JavaScript'); // Previous timer cancelled, final timer starts

console.log('Waiting 500ms...');
// Only the last call will execute after 500ms delay
// Expected output after 500ms: "Searching for: JavaScript"
// 
// Without debouncing, handleSearch would have been called 8 times!
// With debouncing, it's called only once - saving 7 unnecessary API calls

/**
 * Explanation:
 * 
 * This demonstrates the debounce pattern in JavaScript.
 * 
 * 1. Debouncing delays the execution of a function until after a certain
 *    amount of time has passed since it was last called.
 * 
 * 2. When debouncedSearch is called multiple times in quick succession,
 *    only the LAST call will execute after the delay period.
 * 
 * 3. Each new call clears the previous timeout and sets a new one.
 * 
 * 4. Common use cases:
 *    - Search input: Wait for user to stop typing before making API call
 *    - Window resize: Wait for resize to finish before recalculating layout
 *    - Scroll events: Reduce the number of scroll event handlers fired
 * 
 * 5. Benefits:
 *    - Reduces unnecessary function calls
 *    - Improves performance
 *    - Reduces API calls and server load
 * 
 * 6. The function uses closures to maintain the timeoutId across calls.
 * 
 * 7. func.apply(this, args) ensures the original function is called with
 *    the correct context and arguments.
 * 
 * Note: This is different from throttling, which executes the function
 * at regular intervals regardless of how many times it's called.
 */
