let idade = document.getElementById("valor");
let titulo = document.getElementById("tempo");

function apertar()
{
    if(idade.value >= 3000 && titulo.value == 5)
    {
        alert("voce tem aumento de impostos")
    }
    
    else
    {
       alert("nao tem aumento de impostos")
    }
}
