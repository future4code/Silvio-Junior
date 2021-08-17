//1.
const nomeUsuario = prompt("Nome:")
const idadeUsuario = Number(prompt("Idade:"))
const profissaoUsuario = prompt("Profissão:")
const fichaUsuario = {
    nome: nomeUsuario,
    idade: idadeUsuario,
    profissao: profissaoUsuario
}
console.log(fichaUsuario)
console.log(typeof(fichaUsuario))

//2.
const filme1 = {
    nome: "Os Incríveis",
    ano: 2004
}
const filme2 = {
    nome: "Sherek",
    ano: 2001 
}
const comparaFilmes = (filme1,filme2) => {
    return `O primeiro filme foi lançado antes do segundo? ${filme1.ano < filme2.ano}.\nO segundo filme foi lançado antes do primeiro? ${filme1.ano > filme2.ano}.\nSão do mesmo ano? ${filme1.ano === filme2.ano}.`
}
console.log(comparaFilmes(filme1,filme2))

//3.
const carrinho = []
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
    fruta.isDisponivel = !fruta.isDisponivel
}

mercado(fruta1)
mercado(fruta2)
mercado(fruta3)
console.log(carrinho)
console.log(fruta1.isDisponivel)
console.log(fruta2.isDisponivel)
console.log(fruta3.isDisponivel)