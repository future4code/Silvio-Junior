/* Exercícios de interpretação de código
1.a)
recebe um número do usuário e verifica se é par.

b)
Números pares.

c)
Números ímpares.

2.a)
O usuário entra com a fruta de sua escolha pra uma 
pesquisa de preço.

b)
O preço da fruta Maçã é R$ 2.25

c)
O preço da fruta Pêra é R$ 5

3.a)
A primeira linha recebe o usuário um número de sua esclha.

b)
Caso fosse 10:
Esse número passou no teste
Essa mensagem é secreta!!!
Caso a entrada fosse -10 nada seria impresso.

c)
em caso de entradas com valores menores que 0, haverá
erro pois a variável mensagem não será definida.
*/

// Exercícios de escrita de código
//1.
const idadeUsuario = Number(prompt("Informe sua idade:"))

if (idadeUsuario >= 18){
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

//2.
const turnoUsuario = prompt("Digite M para turno matutino, V para vespertino ou N para noturno:")

if (turnoUsuario === "M") {
    console.log("Bom dia!")
} else if (turnoUsuario === "V") {
    console.log("Boa Tarde!")
} else if (turnoUsuario === "N") { 
    console.log("Boa Noite!")
} else {
    console.log("Informe um turno válido.")
}

//3.
switch (turnoUsuario){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Informe um turno válido.")
}

//4.
const filmeUsuario = prompt("Informe gênero do filme:")
const precoIngresso = Number(prompt("Informe o preço do ingresso:"))

if ((filmeUsuario.toLowerCase() == "fantasia") && (precoIngresso < 15)) { 
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}