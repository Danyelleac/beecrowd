var input = require('fs').readFileSync('../dev/stdin/1009.txt', 'utf8');
var lines = input.split('\n');

const name = String(lines.shift());
const fixedSalary = Number(lines.shift()).toFixed(2);
const totalSold = Number(lines.shift()).toFixed(2);
const commission = totalSold*0.15;
const totalSalary = Number(commission)+Number(fixedSalary);

console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);