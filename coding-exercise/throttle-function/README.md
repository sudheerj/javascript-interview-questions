# Throttle Function

## Challenge
Implement a throttle function that limits the rate at which a callback can execute, ensuring it runs at most once per specified time interval.

## Problem Description
Throttling is a technique used to control the rate at which a function executes. Unlike debouncing (which delays execution until activity stops), throttling ensures a function executes at regular intervals during continuous activity.

### Real-World Use Cases
- **Scroll Events**: Update UI elements (like progress bars or lazy-loading) at a controlled rate while scrolling
- **Mouse Movement**: Track cursor position without overwhelming the browser with updates
- **Window Resize**: Recalculate layout at regular intervals during resize
- **API Rate Limiting**: Ensure requests don't exceed API rate limits
- **Game Development**: Limit action frequency (e.g., shooting, jumping) to prevent spam
- **Auto-save**: Save user input at regular intervals while they're typing
- **Infinite Scroll**: Load more content at controlled intervals while scrolling

## Example

### Input
```js
function updateScrollPosition(position) {
    console.log(`Scroll position: ${position}px`);
}

const throttledUpdate = throttle(updateScrollPosition, 1000);

// User scrolls continuously
throttledUpdate(100);  // t=0ms
throttledUpdate(200);  // t=100ms
throttledUpdate(300);  // t=200ms
throttledUpdate(400);  // t=300ms
throttledUpdate(500);  // t=1100ms
throttledUpdate(600);  // t=1200ms
```

### Output
```
// Executes at regular 1000ms intervals
Scroll position: 100px   // t=0ms (immediate)
Scroll position: 500px   // t=1100ms (after 1000ms)
Scroll position: 600px   // t=2200ms (after another 1000ms)
```

## Requirements
1. The throttle function should accept a function and a time limit
2. It should return a new function that limits execution rate
3. The function should execute immediately on the first call (leading edge)
4. Subsequent calls within the time limit should be controlled
5. The function should preserve the correct `this` context and arguments
6. Should handle both leading and trailing edge execution options

## Key Concepts
- **Closures**: Maintaining state (lastExecuted, timeoutId) across function calls
- **Higher-Order Functions**: Returning a function from a function
- **setTimeout/clearTimeout**: Managing asynchronous delays
- **Function Context**: Using `apply()` to preserve `this` binding
- **Timestamps**: Using `Date.now()` to track execution timing

## Implementation Approaches

### 1. Leading Edge Throttle
Executes immediately on first call, then ignores calls for the limit duration:
```js
function throttleLeading(func, limit) {
    let inThrottle = false;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
```

### 2. Leading + Trailing Edge Throttle
Executes immediately and also schedules a final execution:
```js
function throttle(func, limit) {
    let lastExecuted = 0;
    let timeoutId = null;
    
    return function(...args) {
        const now = Date.now();
        const timeSinceLastExecution = now - lastExecuted;
        
        if (timeSinceLastExecution >= limit) {
            lastExecuted = now;
            func.apply(this, args);
        } else {
            clearTimeout(timeoutId);
            const remainingTime = limit - timeSinceLastExecution;
            timeoutId = setTimeout(() => {
                lastExecuted = Date.now();
                func.apply(this, args);
            }, remainingTime);
        }
    };
}
```

## Throttle vs Debounce

| Feature | Throttle | Debounce |
|---------|----------|----------|
| **Execution Pattern** | At regular intervals during activity | Only after activity stops |
| **Frequency** | Guaranteed execution every X ms | Single execution after silence |
| **Use Case** | Continuous updates (scroll, resize) | Wait for completion (search input) |
| **Example** | Update scroll position every 100ms | Search API call 500ms after typing stops |
| **Behavior** | Executes periodically while active | Executes once when idle |

### Visual Comparison
```
User Activity:  ████████████████████████████████
                ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓

Throttle:       ✓       ✓       ✓       ✓
                (executes at regular intervals)

Debounce:                                   ✓
                (executes only after activity stops)
```

## Benefits
- **Performance**: Reduces unnecessary function calls during high-frequency events
- **Consistency**: Ensures predictable execution intervals
- **User Experience**: Provides smooth, responsive updates without lag
- **Resource Management**: Prevents overwhelming the browser or server
- **Battery Life**: Reduces CPU usage on mobile devices

## Common Pitfalls

### 1. Losing `this` Context
```js
// ❌ Wrong: Arrow function loses context
function throttle(func, limit) {
    return () => func(); // 'this' is lost
}

// ✓ Correct: Use regular function and apply
function throttle(func, limit) {
    return function(...args) {
        func.apply(this, args); // Preserves 'this'
    };
}
```

### 2. Not Clearing Previous Timeouts
```js
// ❌ Wrong: Multiple timeouts can stack up
function throttle(func, limit) {
    return function() {
        setTimeout(() => func(), limit); // Creates new timeout every call
    };
}

// ✓ Correct: Clear previous timeout
function throttle(func, limit) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId); // Clear previous
        timeoutId = setTimeout(() => func(), limit);
    };
}
```

### 3. Forgetting to Pass Arguments
```js
// ❌ Wrong: Arguments are lost
function throttle(func, limit) {
    return function() {
        func(); // No arguments passed
    };
}

// ✓ Correct: Collect and pass arguments
function throttle(func, limit) {
    return function(...args) {
        func.apply(this, args); // Pass all arguments
    };
}
```

## Interview Tips

### Questions You Might Be Asked
1. **"What's the difference between throttle and debounce?"**
   - Throttle: Regular intervals during activity
   - Debounce: Single execution after activity stops

2. **"When would you use throttle over debounce?"**
   - Use throttle for continuous updates (scroll, resize, mouse move)
   - Use debounce for completion-based actions (search, form validation)

3. **"How would you implement leading vs trailing edge?"**
   - Leading: Execute immediately, ignore subsequent calls
   - Trailing: Schedule execution for end of interval
   - Both: Execute immediately and schedule final call

4. **"What are the performance benefits?"**
   - Reduces function calls (e.g., from 1000/sec to 10/sec)
   - Prevents browser lag and jank
   - Reduces API calls and server load

5. **"How do you preserve the `this` context?"**
   - Use regular function (not arrow function)
   - Use `func.apply(this, args)` to call original function

### Code Review Points
- ✓ Preserves `this` context with `apply()`
- ✓ Passes all arguments with rest/spread operators
- ✓ Clears previous timeouts to prevent memory leaks
- ✓ Uses closures correctly to maintain state
- ✓ Handles edge cases (first call, rapid calls, etc.)

## Advanced Variations

### Throttle with Options
```js
function throttle(func, limit, options = {}) {
    const { leading = true, trailing = true } = options;
    let lastExecuted = 0;
    let timeoutId = null;
    
    return function(...args) {
        const now = Date.now();
        
        if (!lastExecuted && !leading) {
            lastExecuted = now;
        }
        
        const remaining = limit - (now - lastExecuted);
        
        if (remaining <= 0) {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuted = now;
            func.apply(this, args);
        } else if (!timeoutId && trailing) {
            timeoutId = setTimeout(() => {
                lastExecuted = leading ? Date.now() : 0;
                timeoutId = null;
                func.apply(this, args);
            }, remaining);
        }
    };
}
```

### Throttle with Cancel Method
```js
function throttle(func, limit) {
    let timeoutId = null;
    let lastExecuted = 0;
    
    const throttled = function(...args) {
        const now = Date.now();
        const remaining = limit - (now - lastExecuted);
        
        if (remaining <= 0) {
            lastExecuted = now;
            func.apply(this, args);
        }
    };
    
    // Add cancel method
    throttled.cancel = function() {
        clearTimeout(timeoutId);
        timeoutId = null;
        lastExecuted = 0;
    };
    
    return throttled;
}
```

## Testing Considerations
```js
// Test basic throttling
const mockFn = jest.fn();
const throttled = throttle(mockFn, 1000);

throttled(); // Should execute
throttled(); // Should be ignored
jest.advanceTimersByTime(1000);
throttled(); // Should execute

expect(mockFn).toHaveBeenCalledTimes(2);
```

## Related Patterns
- **Debounce**: Delays execution until activity stops
- **Rate Limiting**: Restricts number of calls in a time window
- **Request Animation Frame**: Browser-optimized throttling for animations
- **Web Workers**: Offload heavy computations to background threads

## Further Reading
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Lodash throttle implementation](https://lodash.com/docs/#throttle)
- [CSS Tricks: Debouncing and Throttling](https://css-tricks.com/debouncing-throttling-explained-examples/)
