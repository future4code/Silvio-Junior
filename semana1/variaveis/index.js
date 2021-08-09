/* RESPOSTAS EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGOS

1. 
10
10 5

2.
Algum erro por não declarar C

3.
cargaHorariaDiaria
salarioDiario

*/

// Exercício 1
let nome
let idade

console.log("Tipo da variável nome:",typeof nome)
console.log("Tipo da variável idade:",typeof idade)

/* O tipo undefined é impresso pois, quando 
declaramos uma variável e não definimos a ela um
valor, automaticamente este tipo é dado à variável,
por ser indefinida */

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log("Tipo da variável nome:",typeof nome)
console.log("Tipo da variável idade:",typeof idade)

/* Como qualquer input realizado manualmente, o tipo
associado ás variáveis for string, mesmo a idade sendo 
composta por números, o JS as lê, nesta forma de entrada,
como texto.*/

console.log("Olá,",nome,"! Você tem",idade,"anos.")

// Exercício 2
const pergunta1 = prompt("Você está usando roupa azul hoje?")
const pergunta2 = prompt("Você gosta de futebol?")
const pergunta3 = prompt("Você gosta de música?")

console.log("Você está usando roupa azul hoje?",pergunta1)
console.log("Você gosta de futebol?",pergunta2)
console.log("Você gosta de música?",pergunta3)

// Ecercício 3
let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é:",a)
console.log("O novo valor de b é:",b)
