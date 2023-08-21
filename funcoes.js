function exemplo1(){
    soma(2, 5) // chama função soma passando dois números como parâmetro
    subtracao(2, 5) // chama função subtracao passando dois números como parâmetro
    multiplicacao(2, 5) // chama função multiplicacao passando dois números como parâmetro
    divisao(2, 5) // chamada função divisao passando dois números como parâmetro
}

function soma(a, b){
    console.log(a + b)
}
function subtracao(a, b){
    console.log(a - b)
}
function multiplicacao(a, b){
    console.log(a * b)
}   
function divisao(a, b){
    console.log(a / b)
}
function exemplo2(){
    console.log(soma2(2, 5))
    console.log(subtracao2(2, 5))
    console.log(multiplicacao2(2, 5))
    console.log(divisao2(2, 5))
}
function soma2(a, b){
    return a + b
}
function subtracao2(a, b){
    return a - b
}   
function multiplicacao2(a, b){
    return a * b
}
function divisao2(a, b){
    return a / b
}
function exemplo3(){
    let a = Number(prompt('Digite um número A'))
    let b = Number(prompt('Digite um número B'))
    soma3(a, b) // passagem de parâmetro por valor
    subtracao3(a, b) // passagem de parâmetro por valor
    multiplicacao3(a, b) // passagem de parâmetro por valor
    divisao3(a, b) // passagem de parâmetro por valor
}
function soma3(a, b){
    console.log(a + b)
}
function subtracao3(a, b){
    console.log(a - b)
}
function multiplicacao3(a, b){
    console.log(a * b)
}
function divisao3(a, b){
    console.log(a / b)
}


function exemplo4(){
    let a = 10
    soma10(a)
    console.log(a) // qual o valor de a após a chamada da função soma10?
}
function soma10(x){
    x = x + 10
}

function exemplo5(){
    let a = 10
    soma10_2(a)
    console.log(a) // qual o valor de a após a chamada da função soma10_2?
    soma10_2(a)
    console.log(a) // qual o valor de a após a chamada da função soma10_2?
    soma10_2(a)
    console.log(a) // qual o valor de a após a chamada da função soma10_2?
}
function soma10_2(a){ // essa variável tem escopo local
    a = a + 10
}

function exemplo6(){
    let vetor = [10, 20, 30, 40, 50]
    let buguei = [9, 7, 8]
    soma3Vetor(vetor)
    console.log(vetor) // qual o valor de vetor após a chamada da função soma3Vetor?
}

function soma3Vetor(buguei){
    for(let i = 0; i < buguei.length; i++){
        buguei[i] = buguei[i] + 3
    }
}

function exemplo7(){
    let vetor = []
    entrada(vetor, 3)
    console.log(vetor)
}

function entrada(vetor, n){
    for(let i = 0; i < n; i++){
        vetor.push(Number(prompt(`Informe um número`)))
    }
}