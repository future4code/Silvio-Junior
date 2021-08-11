/*Exercícios de interpretação de código
1.
a. Undefined
b. null
c. 11
d. 3
e. [3,19,4,5,6,7,8,9,10,11,12,13]
f. 9

2.
SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/

//Exercícios de escrita de código
//1.
const nomeUsuario = prompt("Digite seu nome:")
const emailUsuario = prompt("Digite seu email:")
const frase = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeUsuario}!`
console.log(frase)

//2.
let comidasFavoritas = ["feijoada", "peixe assado", "frango a milanesa", "churrasco", "sushi"]
console.log("A lisda das minhas comidas faviritas é:",comidasFavoritas)
console.log(`As minhas comidas favoritas são: \n${comidasFavoritas[0]}\n${comidasFavoritas[1]}\n${comidasFavoritas[2]}\n${comidasFavoritas[3]}\n${comidasFavoritas[4]}`)
const comidaUsuario = prompt("Qual é a sua comida favorita?")
comidasFavoritas[1] = comidaUsuario
console.log("A lista com a comida do usuário:",comidasFavoritas)

//3.
let listaDeTarefas = []
const tarefa1 = prompt("Qual a sua primeira tarefa?")
const tarefa2 = prompt("Qual a sua segunda tarefa?")
const tarefa3 = prompt("Qual a sua terceira tarefa?")
listaDeTarefas.push(tarefa1,tarefa2,tarefa3)
console.log("A sua lista de tarefas é:",listaDeTarefas)
const escolhaUsuario = Number(prompt("Escolha uma tarefa a partir do índice (0 a 2):"))
listaDeTarefas.splice(escolhaUsuario,1)
console.log("Sua lista de tarefs atualizada:",listaDeTarefas)