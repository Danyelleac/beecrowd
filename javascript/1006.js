var input = require('fs').readFileSync('../dev/stdin/1006.txt', 'utf8');
var lines = input.split('\n');

const A = Number(lines.shift()).toFixed(1);
const B = Number(lines.shift()).toFixed(1);
const C = Number(lines.shift()).toFixed(1);

const MEDIA = (A*2+B*3+C*5)/(2+3+5);

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);