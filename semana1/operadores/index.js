/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1.
a. false
b. false
c. true
d. boolean

2.
o console entenderá a entrada como uma strig.
a entrada deveria ser: Number(prompt("...")).

3. 
a entrada deveria ser: Number(prompt("...")) para que
a sua entrada seja interpretada como números.

*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.
const idade = Number(prompt("Informe sua idade:"))
const idadeAmigo = Number(prompt("Informe a idade de seu melhor amigo:"))

console.log("Sua idade é maior do que a do seu melhor amigo?",idade > idadeAmigo)

const diferenca = idade - idadeAmigo
23
console.log("A diferença de idade é de",diferenca,"anos.")

//2.
const numero = Number(prompt("Insira um número par:"))
const resto = numero%2

console.log("O resto da divisão do número por 2 é:",resto)
//o resto da divisão de qualquer número par por 2, por definição, será 0.
//o resto da divisão de qualquer número ímpar por 2, por definição, será 1.

//3.
const idadeUsuário = Number(prompt("Informe a idade do usuário:"))
const idadeMeses = idadeUsuário*12
const idadeDias = idadeMeses*30
const idadeHoras = idadeDias*24

console.log("A idade em meses:",idadeMeses)
console.log("A idade em dias:",idadeDias)
console.log("A idade em horas:",idadeHoras)

//4.
const primeiroNumero = Number(prompt("Insira o primeiro número:"))
const segundoNumero = Number(prompt("Insira o segundo número:"))

console.log("O primeiro número é maior que o segundo?",primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo?",primeiroNumero === segundoNumero)
console.log("O primeiro número é divisível pelo segundo?",(primeiroNumero%segundoNumero) === 0)
console.log("O segundo número é diviível pelo primeiro?",(segundoNumero%primeiroNumero) === 0)
