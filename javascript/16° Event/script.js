/* No javascript, eventos são ações ou ocorrência que acontecem na página web que estamos implemetando. Esse eventos geralmente invocam função que irão execultar as operações desejadas. alguns exemplos são
- quando um usuário clica no mouse;
- quando uma página da web é carregada;
- quando uma imagem foi carregada;
- quando o mouse passa sobre elementos;
- quando um usuário pressionauma tecla;
*/

let texto = document.getElementById('texto')
function mudar()
{
    texto.innerHTML = 'sao os alunos de santo amaro 2023!'
}

let mostrar = document.getElementById('demo')
function aperte()
{
    mostrar.innerHTML = Date();
}