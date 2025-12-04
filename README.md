# weak-id

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