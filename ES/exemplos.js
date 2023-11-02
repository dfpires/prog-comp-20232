// exemplo do forEach
let nome = ["José", "da Silva", "Xavier", "de Oliveira", "Diniz"]
let nomeCompleto = ""
nome.forEach( (item) => 
            nomeCompleto = nomeCompleto + " " + item)
console.log(nomeCompleto)

// exemplo do map
let vetor1 = [2, 3, 4, 5, 6, 7]
let vetor2 = vetor1.map( 
        (item) => {
            return item * 2
        }
    )
console.log(vetor2)

// exemplo do reduce
let vetor = [10, 20, 30, 40, 50]
let soma = vetor.reduce( (total, item) => {
    console.log(total)
    return total + item
    }, 0)
console.log(soma)

// exemplo do filter
let filtro = vetor.filter( (item) => item > 25)
console.log(filtro)

// exemplo do find
let encontra = vetor.find( (item) => item > 25)
console.log(encontra)

// exemplo do some
let algum = vetor.some( (item) => item > 25)
console.log(algum)

// exemplo do JSON.parse
let veioServidor = '{"name":"John", "age":30, "city":"New York"}'
let objetoJS = JSON.parse(veioServidor)
console.log(objetoJS)

// exemplo do JSON.stringify
let stringJS = JSON.stringify(objetoJS)
console.log(stringJS)

// exemplo do spread
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let car of cars) {
  text += car + " ";
}
console.log(text)

for (let car in cars) {
  console.log(car);
}

