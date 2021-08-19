/* Exercícios de interpretação de código
1.
irá imprimir na saída o valor de cada índice da array (nome e apelido),
acompanhado do índice e da array completa.

2.
Irá imprimir uma lista com os nomes dos usuários, ["Amanda Rangel", "Laís Petra", 
"Letícia Chijo"]

3.
Irá imprimir uma array, semelhante à array inicil, porém excluindo o usuário {nome: "Letícia Chijo", apelido: "Chijo"}
*/

// Exercícios de escrita de código
//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

//a)
const retornaNomes = (item) => {
    return item.nome
}
const arrayDeNomes = pets.map(retornaNomes)
console.log(arrayDeNomes)

//b)
const retornaSalsichas = (item) => {
    return item.raca === "Salsicha"
}
const arrayDosSalsichas = pets.filter(retornaSalsichas)
console.log(arrayDosSalsichas)

//c)
const retornaPoodles  = (item) => {
    return item.raca === "Poodle"
}
const mensagensParaPoodles = (item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
}
const arrayDasPromocoes = pets
    .filter(retornaPoodles)
    .map(mensagensParaPoodles)

    console.log(arrayDasPromocoes)

//2.
var produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
const nomeDosItens = (item) => {
    return item.nome
}
const arrayNomeDosItens = produtos.map(nomeDosItens)
console.log(arrayNomeDosItens)

//b)
const precoDosItensComDesconto5 = (item) => {
    item.preco = item.preco * 0.95
    delete item.categoria
    return item
}
const arrayItensComDesconto = produtos.map(precoDosItensComDesconto5)
console.log(arrayItensComDesconto)

//c)
produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const retornaBebidas = (item) => {
    return item.categoria === "Bebidas"
}
console.log(produtos)
const arrayDasBebidas = produtos.filter(retornaBebidas)
console.log(arrayDasBebidas)

//d)
const nomesYpe = (item) => {
    return item.nome.includes("Ypê")
}

const produtosYpe = produtos.filter(nomesYpe)
console.log(produtosYpe)

//e)
const divulgaProdutos = (item) => {
    return `Compre ${item.nome} por R$${item.preco}.`
}

const arrayDivulgaProdutos = produtos.filter(nomesYpe).map(divulgaProdutos)
console.log(arrayDivulgaProdutos)