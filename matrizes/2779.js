var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let total = parseInt(lines[0])
let compradas = parseInt(lines[1])
let vetor = []
for(let i=1;i<=compradas;i++){
    vetor.push(parseInt(lines[i+1]))
}

let naorepete = []
for(let i=0;i<vetor.length;i++){
    if (!naorepete.some( (item) => item == vetor[i])){
        naorepete.push(vetor[i])
    }
}

console.log(total - naorepete.length)