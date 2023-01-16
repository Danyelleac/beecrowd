var input = require('fs').readFileSync('../dev/stdin/1010.txt', 'utf8');
var lines = input.split('\n');

const line1 = lines.shift().split(" ");
const line2 = lines.shift().split(" ");

const produto1 = Number(line1.shift());
const quantidade1 = Number(line1.shift());
const valor1 = Number(line1.shift());
const Total1 = Number(valor1*quantidade1);

const produto2 = Number(line2.shift());
const quantidade2 = Number(line2.shift());
const valor2 = Number(line2.shift());
const Total2 = Number(valor2*quantidade2);

const TotalGeral = Number(Total1)+Number(Total2);

console.log(`VALOR A PAGAR: R$ ${TotalGeral.toFixed(2)}`);