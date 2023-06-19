function mult(a,b)
{
    return a*b
}

let mult = (a,b) => 
{
    return a*b
}

//Sintaxe da Função é definida com a function palavra-chave, seguida por um nome, seguido por parênteses().
//Quando o javascript atinge uma return instruções, a função para de ser executada.
//Se a função foi invocada a partir de uma instrução, O javaScript "retornará" para o executar o código após instrução invocada.
let celsius = document.getElementById("celsius").value
let resultado = document.getElementById("resultado")

function toCelsius()
{
return resultado.innerHTML = (celsius.value*1.8) + 32
}

//Crie uma função no qual utilize parâmetros para descobrir se um valor é par ou impar.

function soma(x,y)
{
    return x + y;
}

function parouImpar(q)
{
    if(q % 2 == 0)
    {
        return console.log("par")
    }
  

else

{
    return console.log("impar")
}
}

//Escreva uma função que retorne o maior de dois numeros

function maior(t,u)
{
    if(t > u)
    {
        return console.log(t)
    }
    else
    {
        return console.log(u)
    }
}

const maior = (t,u) => {t > u? console.log(t) : console.log(u)}
