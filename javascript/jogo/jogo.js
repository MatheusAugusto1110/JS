let nomeDoJogador;
let resposta;

nomeDoJogador = document.getElementById("nomeDoJogador")
resposta = document.getElementById("resposta");

function enviarNome()
{
    if(nomeDoJogador.value =="")
    {
        alert("insira um nome")
    }
    resposta.innerHTML = "ola," + nomeDoJogador.value + ".vamos jogar"
}