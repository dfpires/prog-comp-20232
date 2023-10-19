let lerMatriz = (matriz, vetor) => {
    for(let i=0;i<5;i++){ // são 5 alunos
        vetor[i] = prompt('Informe o nome do aluno')
        matriz[i] = []
        for(let j=0;j<4;j++){ // são 4 notas
            matriz[i][j] = Number(prompt(`Informe nota ${j+1} do aluno ${vetor[i]}`))
        }
    }
}
let calcularSituacao = (matriz, vetor) => {
    for(let i=0;i<5;i++){ // para cada aluno
        let soma = 0
        for(let j=0;j<4;j++){ // para cada nota
            soma = soma + matriz[i][j]
        }
        let media = soma / 4
        if (media < 3){
            console.log(`O aluno ${vetor[i]} foi reprovado com média ${media}`)
        }
        else if (media < 6){
            console.group(`O aluno ${vetor[i]} ficou de exame com média ${media}`)
        }
        else {
            console.log(`O aluno ${vetor[i]} foi aprovado com média ${media}`)
        }
    }
}
let principal = () => {
    let matriz = []
    let vetor = []
    lerMatriz(matriz, vetor)
    calcularSituacao(matriz, vetor)
}