var input = require('fs').readFileSync('../dev/stdin/1007.txt', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const C = parseInt(lines.shift());
const D = parseInt(lines.shift());

const DIFERENCA = (A*B-C*D);

console.log(`DIFERENCA = ${DIFERENCA}`);