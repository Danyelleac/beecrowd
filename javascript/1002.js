var input = require('fs').readFileSync('../dev/stdin/1002.txt', 'utf8');
var lines = input.split('\n');

var n = Number(3.14159);
var raio = Number(lines.shift());
var area = Number(n*(raio*raio));
var arredondando = area.toFixed(4);

console.log(`A=${arredondando}`);
