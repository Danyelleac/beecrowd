var input = require('fs').readFileSync('../dev/stdin/1001.txt', 'utf8');
var lines = input.split('\n');


const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const X = A+B

console.log("X = "+X)