const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//a)
const nomeDosPokemons = (item) => {
    return item.nome
}
const listaPokemonsOrdemAlfabatica = pokemons.map(nomeDosPokemons).sort()
console.log(listaPokemonsOrdemAlfabatica)

//b)
const retornaTipos = (item) => {
    return item.tipo
}
const excluiRepetidos = (item,index,array) => {
    return array.indexOf(item) === index
}

const listadeTipos = pokemons.map(retornaTipos).filter(excluiRepetidos)
console.log(listadeTipos)