function maiorElemento(matriz){
    let maior = matriz[0][0]
    let iMaior = 0
    let jMaior = 0
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if (matriz[i][j] > maior ){
                maior = matriz[i][j]
                iMaior = i
                jMaior = j
            }
        }
    }
    console.log(`Maior é ${maior} na posição [${iMaior}][${jMaior}]`)
}
function menorElemento(matriz){
    let menor = matriz[0][0]
    let iMenor = 0
    let jMenor = 0
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if (matriz[i][j] < menor ){
                menor = matriz[i][j]
                iMenor = i
                jMenor = j
            }
        }
    }
    console.log(`Menor é ${menor} na posição [${iMenor}][${jMenor}]`)
}
function principal(){
    let matriz = []
    maiorElemento(matriz)
    menorElemento(matriz)
}