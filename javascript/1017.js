var input = require('fs').readFileSync('../dev/stdin/1017.txt', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());

const triangulo = (A*C)/2;
const circulo = 3.14159*Math.pow(C,2);
const trapezio = ((A+B)*C)/2;
const quadrado = Math.pow(B,2);
const retangulo = (A*B);

console.log(`TRIANGULO: ${triangulo.toFixed(3)}
CIRCULO: ${circulo.toFixed(3)}
TRAPEZIO: ${trapezio.toFixed(3)}
QUADRADO: ${quadrado.toFixed(3)}
RETANGULO: ${retangulo.toFixed(3)}`);