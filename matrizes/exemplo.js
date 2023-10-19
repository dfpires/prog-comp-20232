function entradaDados(matriz){
    for(let i=0;i<4;i++){
        matriz[i] = [] // cria um vetor vazio
        alert(`Informe os elementos da linha ${i+1}`)
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Digite o valor do elemento ${i+1}x${j+1}`))
        }
    }
}
function somaDiagonalPrincipal(matriz){
    let soma = 0
    for(let i=0;i<4;i++){
        soma = soma + matriz[i][i]
    }
    alert(`A soma da diagonal principal é ${soma}`)
}
function somaDiagonalSecundaria(matriz){
    let soma = 0
    for(let i=0;i<4;i++){
        soma = soma + matriz[i][3-i]
    }
    return soma
}
function principal(){
    let matriz = []
    entradaDados(matriz)
    somaDiagonalPrincipal(matriz)
    somaDiagonalSecundaria(matriz)
}
principal()