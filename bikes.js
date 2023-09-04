function entradaDados(bikes, marcas){
    // entrada de dados
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
        alert('Bike cadastrada com sucesso')
}
function calcularMediaPrecos(bikes){
    let soma = 0
    for(let i=0;i<bikes.length;i++){
        soma = soma + bikes[i].preco
    }
    if (bikes.length == 0){
        console.log(`Não há bikes cadastradas`)
    }
    else {
        console.log(`Média de preço das bikes: ${soma/bikes.length}`)
    }
}

function calculaBikeMaisAntiga(bikes){
    // bikes mais antigas, considerando empate
    if (bikes.length == 0){
        return (`Não há bikes cadastradas`)
    }
    let maisAntiga = [] 
    maisAntiga.push(bikes[0])
    for(let i=1;i<bikes.length;i++){
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
    if (bikes.length == 0){
        console.log(`Não há bikes cadastradas`)
    }
    else {
        let caloi = []
        for(let i=0;i<bikes.length;i++){
            if (bikes[i].marca == "CALOI"){
                caloi.push(bikes[i])
            }
        }
        console.log(caloi)
    }
}

function calculaQtde29(bikes){
    // quantas bikes possuem aro 29
    if (bikes.length == 0){
        return (`Não há bikes cadastradas`)
    }
    let aro29 = 0
    for(let i=0;i<bikes.length;i++){
        if (bikes[i].aro == 29){
            aro29++
        }
    }
    return (`Quantidade de bikes com aro 29: ${aro29}`)
}
function calculaBikeMaiorQuadro(bikes){
     //  bike com maior quadro, pode-se desconsiderar empates
    if  (bikes.length == 0){
        console.log(`Não há bikes cadastradas`)
    }
    else {
        let maiorQuadro = bikes[0]
        for(let i=1;i<10;i++){
            if (bikes[i].quadro > maiorQuadro.quadro){
                maiorQuadro = bikes[i]
            }
        }
        console.log(maiorQuadro)
    }
}
function principal(){
    let bikes = []
    let marcas = ["CALOI", "SCOTT", "CANNONDALE"]
    let opcao // opção escolhida pelo usuário
    do {
        opcao = Number(prompt("Digite \n 1. Cadastra uma bike \n 2. Calcula média de preços \n 3. Calcula bikes mais antigas \n 4. Calcula bikes da marca CALOI \n 5. Calcula quantidade de bikes com aro 29 \n 6. Calcula bike com maior quadro \n 7. Finaliza"))
        switch(opcao){
            case 1: entradaDados(bikes, marcas) 
                    break
            case 2: calcularMediaPrecos(bikes)
                    break
            case 3: console.log(calculaBikeMaisAntiga(bikes))
                    break
            case 4: calculaBikesCaloi(bikes)
                    break
            case 5: console.log(calculaQtde29(bikes))
                    break
            case 6: calculaBikeMaiorQuadro(bikes)
                    break
            case 7: alert('Programa será finalizado')
                    break
            default: alert(`Opção inválida`) 
        }
    }
    while (opcao != 7)
}
