var input = require('fs').readFileSync('../dev/stdin/1011.txt', 'utf8');
var lines = input.split('\n');

const raio = parseFloat(lines.shift());

const volume = (4/3) * 3.14159 * Math.pow(raio,3)

console.log(`VOLUME = ${volume.toFixed(3)}`);