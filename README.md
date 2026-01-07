# weak-id

[![build status](https://github.com/WebReflection/weak-id/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/weak-id/actions) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/weak-id/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/weak-id?branch=main)

<sup>**Social Media Photo by [Mario Amé](https://unsplash.com/@imperioame) on [Unsplash](https://unsplash.com/)**</sup>

A utility to generate unique ids for weak references.

```js
import weakID from 'weak-id';

const wid = weakID(id => {
  console.log(id, 'collected');
});

let obj = {};
let [id, unknown] = wid(obj);

console.assert(unknown);
console.assert(id === wid(obj)[0]);
console.assert(!wid(obj)[1]);

obj = null;
// the log will happen
```

To have a reliable `i32` value and ensure the next `id` will be actually a *32bit integer*, you can also directly import the `i32` variant:

```js
import i32 from 'weak-id/i32';

// initialize a function that
// will always return a 32bit integer
const next = i32();
// i32(42) to start from 42 as initial value

console.assert(next() === 0);
console.assert(next() === 1);
// ...
```
