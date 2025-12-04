import weakID from './index.js';

const collected = [];
const wid = weakID(id => {
  collected.push(id);
});

let obj = {};
let [id, unknown] = wid(obj);

console.assert(unknown, 'object was not unknown');
console.assert(id === wid(obj)[0], 'id was not the same');
console.assert(!wid(obj)[1], 'object was known');

obj = null;
gc();

setTimeout(() => {
  gc();
  setTimeout(() => {
    gc();
    setTimeout(() => {
      console.assert(collected.length === 1, 'collected length was not 1');
      console.assert(collected.at(0) === id, 'collected id was not the same');
      console.log('OK');
    }, 100);
  }, 100);
}, 100);
