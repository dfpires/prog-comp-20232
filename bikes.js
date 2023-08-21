function bikes(){
    let bikes = []
    let marcas = ["CALOI", "SCOTT", "CANNONDALE"]
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
    // média de preço das bikes
    let soma = 0
    for(let i=0;i<10;i++){
        soma = soma + bikes[i].preco
    }
    console.log(`Média de preço das bikes: ${soma/10}`)
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
    console.log(maisAntiga)
    // bikes da marca CALOI
    let caloi = []
    for(let i=0;i<10;i++){
        if (bikes[i].marca == "CALOI"){
            caloi.push(bikes[i])
        }
    }
    console.log(caloi)
    // quantas bikes possuem aro 29
    let aro29 = 0
    for(let i=0;i<10;i++){
        if (bikes[i].aro == 29){
            aro29++
        }
    }
    console.log(`Quantidade de bikes com aro 29: ${aro29}`)
    //  bike com maior quadro, pode-se desconsiderar empates
    let maiorQuadro = bikes[0]
    for(let i=1;i<10;i++){
        if (bikes[i].quadro > maiorQuadro.quadro){
            maiorQuadro = bikes[i]
        }
    }
    console.log(maiorQuadro)
}
