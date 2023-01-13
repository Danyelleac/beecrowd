var input = require('fs').readFileSync('../dev/stdin/1008.txt', 'utf8');
var lines = input.split('\n');

const NUMBER = parseInt(lines.shift());
const WH = parseInt(lines.shift());
const SH = Number(lines.shift()).toFixed(2);

const SALARY = Number(WH*SH).toFixed(2);

console.log(`NUMBER = ${NUMBER}\nSALARY = U$ ${SALARY}`);