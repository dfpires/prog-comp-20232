function leituraDados(vetor, matriz){
    for(let i=0;i<3;i++){
        vetor.push(prompt('Informe o nome do aluno'))
        matriz[i] = []
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}
function mediaAlunos(vetor, matriz){
    let soma
    for(let i=0;i<3;i++){ // para cada aluno
        soma = 0
        for(let j=0;j<4;j++){ // para cada nota
            soma = soma + matriz[i][j]
        }
        console.log(`O aluno ${vetor[i]} teve média ${(soma / 4).toFixed(2)}`)
    }
}

function mediaBimestre(matriz){
    let soma
    for(let j=0;j<4;j++){ // para cada bimestre
        soma = 0
        for(let i=0;i<3;i++){ // para cada aluno
            soma = soma + matriz[i][j]
        }
        console.log(`O ${j+1}o. bimestre teve média ${(soma / 3).toFixed(2)}`)
    }
}
function principal(){
    let vetor = []
    let matriz = []
    leituraDados(vetor, matriz)
    mediaAlunos(vetor, matriz)
    mediaBimestre(matriz)
}