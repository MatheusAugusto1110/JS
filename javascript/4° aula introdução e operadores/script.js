let idade = document.getElementById("idade");
let titulo = document.getElementById("titulo");

function apertar()
{
    if(idade.value >= 16 && titulo.value == "Sim")
    {
        alert("podera votar")
    }
    
    else
    {
       alert("nao podera votar")
    }
}
