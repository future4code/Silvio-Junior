/* Exercícios de interpretação de código
1.
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"

2.a)
nome: "Juca",
idade: 3,
raca:"SRD"

nome:"Juba",
idade: 3,
raca:"SRD"

nome:"Jubo",
idade: 3
raca:"SRD"

b)
Copia o objeto passado.

3.a)
false
undefined

b)
Na primeira impressão, ao passar como argumentos de minhaFuncao
pessoa e backender, a função a propriedade passada como argumento 
do objeto, sendo assim, procura a propriedade backender dentro do objeto
pessoa. O mesmo acontece na sengunda impressão, sendo que altura não está
definida para o objeto.
*/

//Eercícios de Escrita de código
//1.a)
const pessoa = {
    nome: "Silvio",
    apelidos: ["Shibe","Sil","Silvinho"]
}

const imprimeApelidos = (objeto) => {
    console.log(`Eu sou o ${objeto.nome}, mas podem me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)

}

//b)
const novaPessoa = {
    ...pessoa,
    apelidos: ["Silvão","Silvio Jr.","Vio"]
}

imprimeApelidos(pessoa)
imprimeApelidos(novaPessoa)

//2.
const cadastro1 = {
    nome: "Fulano de Tal",
    idade: 35,
    profissao: "Engenheiro"
}

const cadastro2 = {
    nome: "João de Tal",
    idade: 15,
    profissao: "Estudante"
}

const cadastroGeral = (objeto) => {
    return [objeto.nome,objeto.nome.length, objeto.idade,objeto.profissao,objeto.profissao.length]
}

console.log(cadastroGeral(cadastro1))
console.log(cadastroGeral(cadastro2))

//3.
carrinho = []

const fruta1 = {
    nome: "Abacate",
    isDisponivel: true
}

const fruta2 = {
    nome: "Abacaxi",
    isDisponivel: true
}

const fruta3 = {
    nome: "Ameixa",
    isDisponivel: true
}

const mercado = (fruta) => {
    carrinho.push(fruta.nome)
}

mercado(fruta1)
mercado(fruta2)
mercado(fruta3)

console.log(carrinho)