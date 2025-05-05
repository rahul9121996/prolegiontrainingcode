import {add,PI} from './script.js';

console.log(add(3,4))
console.log(PI)

// for default export
import multiply from './script.js';
console.log(multiply(4, 2));

// common js export
const add = require('./script.js');
console.log(add(5, 3));