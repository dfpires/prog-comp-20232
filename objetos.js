function exe1(){
    // cria objeto e socita entrada de dados
    let obj = {
        a: Number(prompt('Informe o valor de a')),
        b: Number(prompt('Informe o valor de b')),
        c: Number(prompt('Informe o valor de c')),
        delta: 0
    }
    // calcula o delta
    // ** (exponencial)
    obj.delta = obj.b ** 2 - (4 * obj.a * obj.c)
    console.log(`O delta da equação é ${obj.delta}`)
}

// Faça um programa que receba o codigo, nome, p1 e p2 de 10 alunos
// O programa deve calcular a média aritmética de cada aluno e mostrar
// também a média da turma

function exe2(){
    let somaMedias = 0
    for(let i=0;i<10;i++){
        let obj = {
            codigo: Number(prompt('Informe o código do aluno')),
            nome:  prompt('Informe o nome do aluno'),
            p1: Number(prompt('Informe a nota p1 do aluno')),
            p2: Number(prompt('Informe a nota p2 do aluno')),
            media: 0
        }
        obj.media = (obj.p1 + obj.p2) / 2
        alert(`A média do aluno ${obj.nome} é ${obj.media}`)
        somaMedias = somaMedias + obj.media
    }
    alert(`A soma das médias da turma é ${somaMedias}`)
}