function exe1(){
    // criar o vetor de filmes
    let filmes = []
    for(let i=0;i<4;i++){
        // cria o objeto
        let objFilme = {
            titulo: prompt(`Informe título do filme`),
            duracao: Number(prompt(`Informe duração do filme`)),
            class: Number(prompt(`Informe classificação do filme`)),
            avaliacao: Number(prompt(`Informe avaliação do filme`)),
        }
        // adiciona objeto no vetor
        filmes.push(objFilme)
    }
    // calcular a média de avaliações
    let somaAvaliacoes = 0
    for(let i=0;i<4;i++){
        somaAvaliacoes = somaAvaliacoes + filmes[i].avaliacao
    }
    console.log(`A média das avaliações é ${somaAvaliacoes/4}`)
    // filme com maior e menor duração
    let maiorDuracao = filmes[0].duracao
    let menorDuracao = filmes[0].duracao
    let tituloMaiorDuracao = filmes[0].titulo
    let tituloMenorDuracao = filmes[0].titulo
    for(let i=0;i<4;i++){
        if (filmes[i].duracao > maiorDuracao){
            maiorDuracao = filmes[i].duracao
            tituloMaiorDuracao = filmes[i].titulo
        }
        if (filmes[i].duracao < menorDuracao){
            menorDuracao = filmes[i].duracao
            tituloMenorDuracao = filmes[i].titulo
        }
    }
    console.log(`O filme ${tituloMaiorDuracao} é o mais longo`)
    console.log(`O filme ${tituloMenorDuracao} é o mais curto`)
}

function votacao(){
    let candidatos = []
    let partidos = ["PT", "PSDB", "PL", "PDT"]
    // entrada de dados
    for(let i=0;i<10;i++){  
        let obj = {
            codigo: Number(prompt(`Informe o número do candidato`)),
            qtdeVotos: Number(prompt(`Informe a quantidade de votos do candidato`)),
            partido: prompt(`Informe o partido do candidato`).toUpperCase(),
            nome: prompt(`Informe o nome do candidato`)
        }
        // verifica se o partido é válido
        while (!partidos.includes(obj.partido)){
            obj.partido = prompt(`Partido inválido. Informe novamente o partido`).toUpperCase()
        }
        // insere objeto no vetor
        candidatos.push(obj)
    }  
    // candidato mais votado
    let maisVotado = candidatos[0].qtdeVotos
    let nomeMaisVotado = candidatos[0].nome
    let partidoMaisVotado = candidatos[0].partido
    for(let i=0;i<10;i++){
        if (candidatos[i].qtdeVotos > maisVotado){
            maisVotado = candidatos[i].qtdeVotos
            nomeMaisVotado = candidatos[i].nome
            partidoMaisVotado = candidatos[i].partido
        }
    }
    console.log(`O candidato mais votado é ${nomeMaisVotado} do partido ${partidoMaisVotado}`)
    // candidato mais votado de um determinado partido
    let partidoUsuario = prompt(`Informe o partido`).toUpperCase()
    let maisVotadoPartido = 0
    let nomeMaisVotadoPartido = ""
    for(let i=0;i<10;i++){
        if (candidatos[i].partido == partidoUsuario){
            if (candidatos[i].qtdeVotos > maisVotadoPartido){
                maisVotadoPartido = candidatos[i].qtdeVotos
                nomeMaisVotadoPartido = candidatos[i].nome
            }
        }
    }
    console.log(`O candidato mais votado do partido ${partidoUsuario} é ${nomeMaisVotadoPartido}`)
}