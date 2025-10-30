async function fetchData() {
    throw new Error('Network error');
}

async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Caught:', error.message);
        return null;
    }
}

getData().then(result => {
    console.log('Result:', result);
});

// Output:
// Caught: Network error
// Result: null

/**
 * Explanation:
 * 
 * This demonstrates error handling with async/await in JavaScript.
 * 
 * 1. fetchData() is an async function that throws an error.
 * 
 * 2. In getData(), we use try/catch to handle errors from await fetchData().
 * 
 * 3. When fetchData() throws an error, it's caught by the catch block,
 *    which logs the error message and returns null.
 * 
 * 4. The .then() receives the return value from getData(), which is null
 *    because the error was caught and handled.
 * 
 * 5. Without try/catch, the error would propagate and could be caught
 *    with .catch() on the promise chain.
 */
