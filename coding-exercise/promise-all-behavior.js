const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve('foo'), 100));
const promise3 = Promise.reject('Error occurred');
const promise4 = Promise.resolve(42);

Promise.all([promise1, promise2, promise4])
    .then(values => {
        console.log(values); // [3, 'foo', 42]
    })
    .catch(error => {
        console.log('Caught:', error);
    });

Promise.all([promise1, promise2, promise3, promise4])
    .then(values => {
        console.log(values); // This won't execute
    })
    .catch(error => {
        console.log('Caught:', error); // Caught: Error occurred
    });

/**
 * Explanation:
 * 
 * This demonstrates Promise.all() behavior in JavaScript.
 * 
 * 1. Promise.all() takes an array of promises and returns a single promise.
 * 
 * 2. If ALL promises resolve, Promise.all() resolves with an array of all
 *    resolved values, in the same order as the input promises.
 * 
 * 3. If ANY promise rejects, Promise.all() immediately rejects with the
 *    reason of the first promise that rejected. Other promises are ignored.
 * 
 * 4. In the first example, all three promises resolve, so we get [3, 'foo', 42].
 * 
 * 5. In the second example, promise3 rejects, so Promise.all() rejects
 *    immediately with 'Error occurred', even though promise1 and promise4
 *    would have resolved.
 * 
 * 6. Promise.all() waits for all promises to settle (resolve or reject).
 * 
 * Use Promise.allSettled() if you want to wait for all promises regardless
 * of whether they resolve or reject.
 */
