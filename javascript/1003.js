var input = require('fs').readFileSync('../dev/stdin/1003.txt', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const SOMA = A+B;

console.log(`SOMA = ${SOMA}`);