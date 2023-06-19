let fruta = document.getElementById("fruta");
let resultado = document.getElementById("resultado")

function apertar()
{
    switch(fruta.value)
{
    case "banana":
    resultado.innerHTML = "voce escolheu banana"
    console.log("voce escolheu banana")
    break;
    case "maça":
    resultado.innerHTML = "voce escolheu maça"
    console.log("voce escolheu maça")
    break;
    default: 
    resultado.innerHTML = "essa fruta nao existe no sistema"
    console.log("nao existe no nosso sistema essa fruta")
}

}
