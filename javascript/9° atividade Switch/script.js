let semana = document.getElementById("semana");
let resultado = document.getElementById("resultado")

function aperte()
{
  switch(semana.value)
{
case "1":
resultado.innerHTML = "domingo dia util"
console.log("domingo dia util")
break;

case "2":
resultado.innerHTML = "segunda dia inutil"
console.log("segunda dia inutil")
break;

case "3":
resultado.innerHTML = "terca dia inutil"
console.log("terca dia inutil")
break;

case "4":
resultado.innerHTML = "quarta dia util"
console.log("quarta dia util")
break;

case "5":
resultado.innerHTML = "quinta dia inutil"
console.log("quinta dia inutil")
break;

case "6":
resultado.innerHTML = "sexta dia util"
console.log("sexta dia util")
break;

case "7":
resultado.innerHTML = "sabado dia util"
console.log("sabado dia util")
break;

}
}