var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines pode ser 10\n9 ou -10\n4 ou 15\n-7
let A = parseInt(lines[0])
let B = parseInt(lines[1])
let X = A + B
console.log(`X = ${X}`)