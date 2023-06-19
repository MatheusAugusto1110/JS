let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")
let sinal = document.getElementById("sinal")
let resultado = document.getElementById("resultado")

function calculo()
{
    switch(sinal.value)
    {
        case"+":
        let soma = parseInt(valor1.value) + parseInt(valor2.value)
        resultado.innerHTML = soma
        break;

        case"-":
        let subtracao = parseInt(valor1.value) - parseInt(valor2.value)
        resultado.innerHTML = subtracao
        break;

        case"/":
        let divisao = parseInt(valor1.value) / parseInt(valor2.value)
        resultado.innerHTML = divisao
        break;

        case"*":
        let multiplicacao = parseInt(valor1.value) * parseInt(valor2.value)
        resultado.innerHTML = multiplicacao 
        break;
    }
}