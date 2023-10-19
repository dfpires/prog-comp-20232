function lerMatriz(matriz, meses){
    for(let i=0;i<12;i++){
        matriz[i] = []
        alert(`Informe as vendas de ${meses[i]}`)
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe valor da semana ${j+1}`))
        }
    }
}
function totalMes(matriz, meses){
    let total
    for(let i=0;i<12;i++){// para cada mês
        total = 0
        for(let j=0;j<4;j++){ // para cada semana
            total = total + matriz[i][j]
        }
        console.log(`Total vendido em ${meses[i]} é ${total}`)
    }
}
function totalSemana(matriz){
    let total
    for(let j=0;j<4;j++){ // para cada semana
        total = 0
        for(let i=0;i<12;i++){ // para cada mês
            total = total + matriz[i][j]
        }
        console.log(`Total vendido na semana ${j+1} é ${total}`)
    }
}

function totalAno(matriz){
    let total = 0
    for(let i=0;i<12;i++){
        for(let j=0;j<4;j++){
            total = total + matriz[i][j]
        }
    }
    console.log(`O total da loja ${total}`)
}


function principal(){
    let matriz = []
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho"
,"julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    lerMatriz(matriz, meses)
    totalMes(matriz, meses)
    totalSemana(matriz)
    totalAno(matriz)
}