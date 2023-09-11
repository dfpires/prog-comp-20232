let cadastraPP = (vetorPP) => {
    // solicita dados ao usuário e guarda em um objeto
    let objPP = {
        codigo: Number(prompt(`Informe o código do partido`)),
        nome: prompt(`Informe o nome do partido`),
        sigla: prompt(`Informe a sigla do partido`),
        presidente: prompt(`Informe o nome do presidente do partido`),
        nroCand: Number(prompt(`Informe o número de candidatos do partido`))   
    }
    // verifica se o código já existe
    while (vetorPP.some( (pp) => pp.codigo == objPP.codigo)) {
        alert(`Código já existente`)
        objPP.codigo = Number(prompt(`Informe um novo código do partido`))
    }
    // adiciona o objeto no vetor
    vetorPP.push(objPP)
    alert('Partido adicionado')
}
let cadastraPolitico = (vetorPolitico, vetorPP) => {
    let objPolitico = {
        codPartido:  Number(prompt(`Informe o código do partido`)),
        nome: prompt(`Informe o nome do político`),
        qtde: 0,
        cargo: prompt(`Informe o cargo do político`)
    }
    // verifica se o código do partido existe
    while (!vetorPP.some( (partido) => partido.codigo == objPolitico.codPartido)) {
        alert(`Partido não encontrado`)
        objPolitico.codPartido = Number(prompt(`Informe um código de partido que exista`))
    }
    vetorPolitico.push(objPolitico)
    alert('Político adicionado')
}
let votar = (vetorPolitico) => {
    let codigoPartido = Number(prompt(`Informe o código do partido`))
    let nomePolitico = prompt(`Informe o nome do político`)
    // percorre o vetor
    let achou = false
    for(let i=0; i<vetorPolitico.length; i++) {
        if (codigoPartido == vetorPolitico[i].codPartido && nomePolitico == vetorPolitico[i].nome) {
            vetorPolitico[i].qtde++
            alert(`Voto registrado com sucesso`)
            achou = true
        }
    }
    if (!achou){
        alert('Político não encontrado')
    }
}
// função principal
let votacao = () => {
    let vetorPP = []
    let vetorPolitico = []
    let opcao
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar partido \n 2. Cadastrar político \n 3. Votar \n4. Sair`))
        switch(opcao) {
            case 1: cadastraPP(vetorPP)
                    break
            case 2: cadastraPolitico(vetorPolitico, vetorPP)
                    break        
            case 3: votar(vetorPolitico)
                    break
            case 4: alert('Obrigado por utilizar nosso programa')
                    break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 4)
    console.log(vetorPP)
}