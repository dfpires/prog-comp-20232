// esta função é assíncrona
let buscarCep = async () => {
    // recupera o valor do campo cep
    let cep = document.getElementById("cep").value;
    // monta a url de onde está localizado a API
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    // faz a requisição HTTP
    // await é uma função síncrona, pois enquanto a API não responder, 
    // o código não continua   
    // fecth é uma função nativa do JS que faz requisições HTTP 
    let resposta = await fetch(url);
    // transforma a resposta em um objeto JSON, pois chegar em string
    let respostaJSON = await resposta.json(); // a conversão pode demorar
    // preenche os campos do formulário com os dados do JSON
    document.getElementById("logradouro").value = respostaJSON.logradouro;
    document.getElementById("bairro").value = respostaJSON.bairro;
    document.getElementById("cidade").value = respostaJSON.localidade
}