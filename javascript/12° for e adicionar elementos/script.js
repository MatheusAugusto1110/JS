let item = document.getElementById("item")

function adicionar(){
//criar um elemento
let p = document.createElement("li");
//criar conteudo
let texto = document.createTextNode(item.value)
p.appendChild(texto)
//adicionar no body
document.getElementById("lista").appendChild(p)
}