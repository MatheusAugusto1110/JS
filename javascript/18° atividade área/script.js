let resultado = document.getElementById('resultado')
let input1 = document.getElementById('N1')
let input2 = document.getElementById('N2')

let x = document.getElementById('botao')
x.addEventListener('click', apertar)

function apertar()
{
    resultado.innerHTML = (parseFloat(input.value)*parseFloat(input2.value)) / 2
}