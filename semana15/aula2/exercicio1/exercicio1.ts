//a)

let minhaString: string = 'Silvio'

// Ao tentar atribuir qualquer valor à essa variavel que não uma string, dará erro.

//b)

let meuNumero: number = 29

//para o numero aceitar valores numéricos de de string:

let meuOutroNumero: number | string = 29
meuOutroNumero = 'vinte e nove'

//c)

enum CoresFavoritas {
    VERDE = 'Verde',
    AMARELO = 'Amarelo',
    VERMELHO = 'Vermelho',
    AZUL = 'Azul',
    ROXO = 'Roxo'
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresFavoritas
}

let pessoa1: Pessoa = {
    nome: 'Silvio',
    idade: 24,
    corFavorita: CoresFavoritas.ROXO
}

let pessoa2: Pessoa ={
    nome: 'Fulano',
    idade: 45,
    corFavorita: CoresFavoritas.VERDE
}

let pessoa3: Pessoa = {
    nome:'Jão',
    idade: 23,
    corFavorita: CoresFavoritas.AMARELO
}

