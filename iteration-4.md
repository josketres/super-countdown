# Iteration 4

* Based on previous iteration.
* **Twist:** Use a `Promise` and `window.setTimeout` to create a tick() function.

## Hints
* Read and understand the `ES6 Promise API`. 
* Make some examples to understand how it works.
* `Promise` constructor.
* `Promise.then`
* Once you've understood `Promise`, you can restructure your code using a `tick()` function like this:
```js
const tick = (milliseconds) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, milliseconds);
});
```
