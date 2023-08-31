let principal = () => {
    let vetFarmacias = []
    let vetRemedios = []
    cadastraFarmacias(vetFarmacias)
    cadastraRemedios(vetRemedios, vetFarmacias)
    vendeRemedios(vetRemedios)
}

let cadastraFarmacias = (vetFarmacias) => {
    for(let i=0;i<5;i++){
        let objFarm = {
            codigo: Number(prompt(`Informe o código da farmácia`)),
            nome: prompt(`Informe o nome da farmácia`),
            endereco: prompt(`Informe o endereço da farmácia`)
        }
        while (vetFarmacias.some( (farm) => farm.codigo == objFarm.codigo)){
            alert(`Código já existente`)
            objFarm.codigo = Number(prompt(`Informe novo código da farmácia`))
        }
        vetFarmacias.push(objFarm)
    }
}

let cadastraRemedios = (vetRemedios, vetFarmacias) => {
    for(let i = 0; i < 5; i++){
        let objRem = {
            codigoFarm: Number(prompt(`Informe o código da farmácia`)),
            nome: prompt(`Informe o nome do remédio`),
            qtde: Number(prompt(`Informe a quantidade do remédio`)),
            preco: Number(prompt(`Informe o preço do remédio`))
        }
        while (!vetFarmacias.some( (farm) => farm.codigoFarm == objRem.codigoFarm)){
            alert('Farmácio não existente')
            objRem.codigoFarm = Number(prompt(`Informe novo código da farmácia`))
        }
        vetRemedios.push(objRem)
    }
}
let vendeRemedios = (vetRemedios) => {
    let codFarmacia = Number(prompt(`Informe o código da farmácia do remédio`))
    let nomeRemedio = prompt(`Informe o nome do remédio`)
    let qtdeVendida = Number(prompt(`Informe a quantidade vendida`))
    // vamos procurar o remédio na lista de remédios
    let achou = false // assumo que não encontrei o remédio
    for(let i=0;i<vetRemedios.length;i++){
        if (vetRemedios[i].codigoFarm == codFarmacia && 
            vetRemedios[i].nome == nomeRemedio){
                achou = true // achei o remédio
                if (vetRemedios[i].qtde >= qtdeVendida){ // podemos vender
                    // atualiza estoque
                    vetRemedios[i].qtde = vetRemedios[i].qtde - qtdeVendida
                    alert(`Venda efetuada com sucesso`)
                }
                else {
                    alert('Estoque insuficiente')
                }
        }
    } // for
    if (!achou){
        alert(`Remédio/farmácia não existe`)
    }
}