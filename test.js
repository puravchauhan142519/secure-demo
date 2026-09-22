const assert = require('node:assert/strict');
const { calculate } = require('./app.js');

assert.equal(calculate(2, 'add', 3), 5);
assert.equal(calculate(8, 'subtract', 3), 5);
assert.equal(calculate(4, 'multiply', 5), 20);

console.log('All JavaScript tests passed.');
