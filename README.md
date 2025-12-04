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