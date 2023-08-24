function entradaDados(bikes, marcas){
    // entrada de dados
    for(let i=0;i<10;i++){
        let bike = {
            marca: prompt(`Informe marca da bike`).toUpperCase(),
            modelo: prompt(`Informe modelo da bike`),
            aro: Number(prompt(`Informe aro da bike`)),
            quadro: Number(prompt(`Informe quadro da bike`)),
            ano: Number(prompt(`Informe ano da bike`)),
            preco: Number(prompt(`Informe preco da bike`))
        }
        while (!marcas.includes(bike.marca)){
            bike.marca = prompt(`Informe nova marca da bike`).toUpperCase()
        }
        bikes.push(bike)
    }
}
function calcularMediaPrecos(bikes){
    let soma = 0
    for(let i=0;i<10;i++){
        soma = soma + bikes[i].preco
    }
    console.log(`Média de preço das bikes: ${soma/10}`)
}
function calculaBikeMaisAntiga(bikes){
    // bikes mais antigas, considerando empate
    let maisAntiga = [] 
    maisAntiga.push(bikes[0])
    for(let i=1;i<10;i++){
        if (bikes[i].ano < maisAntiga[0].ano){
            maisAntiga = [] // zera o vetor
            maisAntiga.push(bikes[i])
        }
        else if (bikes[i].ano == maisAntiga[0].ano){
            maisAntiga.push(bikes[i])
        }
    }
     return maisAntiga
}
function calculaBikesCaloi(bikes){
    // bikes da marca CALOI
    let caloi = []
    for(let i=0;i<10;i++){
        if (bikes[i].marca == "CALOI"){
            caloi.push(bikes[i])
        }
    }
    console.log(caloi)
}
function calculaQtde29(bikes){
    // quantas bikes possuem aro 29
    let aro29 = 0
    for(let i=0;i<10;i++){
        if (bikes[i].aro == 29){
            aro29++
        }
    }
    return (`Quantidade de bikes com aro 29: ${aro29}`)
}
function calculaBikeMaiorQuadro(bikes){
     //  bike com maior quadro, pode-se desconsiderar empates
     let maiorQuadro = bikes[0]
     for(let i=1;i<10;i++){
         if (bikes[i].quadro > maiorQuadro.quadro){
             maiorQuadro = bikes[i]
         }
     }
     console.log(maiorQuadro)
}
function principal(){
    let bikes = []
    let marcas = ["CALOI", "SCOTT", "CANNONDALE"]
    entradaDados(bikes, marcas)  // passagem de parâmetro por referência
    calcularMediaPrecos(bikes)
    console.log(calculaBikeMaisAntiga(bikes))
    calculaBikesCaloi(bikes)
    console.log(calculaQtde29(bikes))
    calculaBikeMaiorQuadro(bikes)
}
