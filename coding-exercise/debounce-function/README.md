# Debounce Function

## Challenge
Implement a debounce function that delays the execution of a callback until after a specified delay period has elapsed since the last time it was invoked.

## Problem Description
Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often. It limits the rate at which a function can fire.

### Real-World Use Cases
- **Search Input**: Wait for the user to stop typing before making an API call
- **Window Resize**: Wait for resize to finish before recalculating layout
- **Scroll Events**: Reduce the number of scroll event handlers fired
- **Button Clicks**: Prevent multiple form submissions

## Example

### Input
```js
function handleSearch(query) {
    console.log(`Searching for: ${query}`);
}

const debouncedSearch = debounce(handleSearch, 500);

// User types rapidly
debouncedSearch('J');
debouncedSearch('Ja');
debouncedSearch('Jav');
debouncedSearch('JavaScript');
```

### Output
```
// Only executes once after 500ms of the last call
Searching for: JavaScript
```

## Requirements
1. The debounce function should accept a function and a delay time
2. It should return a new function that delays invoking the original function
3. Each new call should reset the delay timer
4. Only the last call should execute after the delay period
5. The function should preserve the correct `this` context and arguments

## Key Concepts
- **Closures**: Maintaining state (timeoutId) across function calls
- **Higher-Order Functions**: Returning a function from a function
- **setTimeout/clearTimeout**: Managing asynchronous delays
- **Function Context**: Using `apply()` to preserve `this` binding

## Difference from Throttling
- **Debounce**: Executes the function only after the calls have stopped for a specified period
- **Throttle**: Executes the function at most once per specified time interval

## Benefits
- Improves performance by reducing unnecessary function calls
- Reduces API calls and server load
- Provides better user experience by preventing excessive updates
