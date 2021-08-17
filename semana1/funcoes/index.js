/* Exercícios de interpretação de código
1.a)
10
50
b)
A função calcularia da mesma forma a operação (variavel*5)
porém, nenhum valor seria retornado e nada seria impresso no
console.

2.a)
É uma função que recebe um texto do usuário e faz
uma busca no texto para verificar a existência da palavra
"cenoura", antes disso transforma o texto para letras
minúsculas para facilitar a busca. Sua utilidade é 
justamente para realizar a bsuca de elementos dentro
de strings.
b)
true
true 
false
*/

//Exercícios de escrita de código
//1.a)
const imprimeMinhaMensagem = () => {
    console.log("Eu sou o Silvio, tenho 24 anos, moro em Maceió e sou estudante.")
}
imprimeMinhaMensagem()
//b)
const nomeUsuario = prompt("Informe seu nome:")
const idadeUsuario = Number(prompt("Informe sua idade:"))
const cidadeUsuario = prompt("Informe sua cidade:")
const profissaoUsuario = prompt("Informe sua profissão:")

const imprimeMensagemUsuario = (nomeUsuario,idadeUsuario,cidadeUsuario,profissaoUsuario) => {
    console.log(`Eu sou o ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}.`)
}
imprimeMensagemUsuario(nomeUsuario,idadeUsuario,cidadeUsuario,profissaoUsuario)

//2.a)
const realizarSoma = (numero1,numero2) => {
    return numero1 + numero2
}
console.log("A soma dos números:",realizarSoma(34,56))
//b)
const comparaNumeros = (numero1,numero2) => {
    return numero1 >= numero2
}
console.log("O primeiro número é maior que o segundo?",comparaNumeros(12,16))
//c)
const verificaPar =  (numero) => {
    return numero%2 === 0
}
console.log("O numero é par?",verificaPar(3))
//d)
const analisaMensagem = (string) => {
    console.log(`A mensagem \n${string.toUpperCase()} \npossui ${string.length} caracteres.`) 
}
analisaMensagem("Oi, eu sou o Goku.")

//3.
const realizaSoma = (numero1,numero2) => {
    return numero1 + numero2}
const realizaSubtracao = (numero1,numero2) => {
    return numero1 - numero2
}
const realizaMultiplicacao = (numero1,numero2) => {
    return numero1 * numero2
}
const realizaDivisao = (numero1,numero2) => {
    return numero1 / numero2
}

const numero1 = Number(prompt("Informe o primeiro numero:"))
const numero2 = Number(prompt("Informe o segundo numero:"))

console.log(`Soma: ${realizaSoma(numero1,numero2)}`)
console.log(`Subtração: ${realizaSubtracao(numero1,numero2)}`)
console.log(`Multiplicação: ${realizaMultiplicacao(numero1,numero2)}`)
console.log(`Divisão: ${realizaDivisao(numero1,numero2)}`)