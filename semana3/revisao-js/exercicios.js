// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    for (i = 0; i < array.length; i++){
        for (j = (i+1); j < array.length; j++){
            if (array[j] < array[i]){
                aux = array[j]
                array[j] = array[i]
                array[i] = aux
            }
        }
    }
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayDePares = []
  for (i = 0; i< array.length; i++){
      if (array[i]%2 === 0){
          arrayDePares.push(array[i])
      }
  }
  return arrayDePares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayDeParesAoQuadrado = []
    for (i = 0; i< array.length; i++){
        if (array[i]%2 === 0){
            arrayDeParesAoQuadrado.push(array[i]**2)
        }
    }
    return arrayDeParesAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]
    for (let elemento of array){
        if (elemento > maior) {
            maior = elemento
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = num1
    let menor = num2
    if (num2 > maior){
        maior = num2
        menor = num1
    }

    const objeto = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior%menor === 0,
        diferenca: maior - menor
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    listaDePares = [0]
    let i = 0
    while (listaDePares.length < n){
        listaDePares.push(listaDePares[i] + 2)
        i = i + 1
    }
    return listaDePares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let classifcacao
    if (ladoA === ladoB && ladoB === ladoC){
        classifcacao =  "Equilátero"
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        classifcacao = "Escaleno"
    } else {
        classifcacao = "Isósceles"
    }
    return classifcacao
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    for (i = 0; i < array.length; i++){
        for (j = (i+1); j < array.length; j++){
            if (array[j] < array[i]){
                aux = array[j]
                array[j] = array[i]
                array[i] = aux
            }
        }
    }
    return [array[array.length - 2], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let textoDosAtores = ""
    for (i = 0; i < filme.atores.length; i++){
        if (i === (filme.atores.length - 1)){
            textoDosAtores = textoDosAtores + filme.atores[i] + ""
        } else {
            textoDosAtores = textoDosAtores + filme.atores[i] + ", "
        }
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${textoDosAtores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let novaPessoa = {
        ... pessoa,
        nome: "ANÔNIMO"
    }
    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((pessoas) => {
        return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60
    })

    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
        return pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade >= 60
    })

    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const atualizaContas = (cliente) => {
        comprasTotal = 0
        for (let compras of cliente.compras){
            comprasTotal = comprasTotal + compras
        }
        cliente.compras = []
        cliente.saldoTotal = cliente.saldoTotal - comprasTotal
        return cliente
    }
    return contas.map(atualizaContas)
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    function compararNomes(pessoa1,pessoa2){
        if (pessoa1.nome < pessoa2.nome){
            return -1
        } else if (pessoa1.nome > pessoa2.nome) {
            return 1
        } else {
            return 0
        }
    }
    return consultas.sort(compararNomes)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    function compararDatas(pessoa1,pessoa2){
        if (new Date(pessoa1.dataDaConsulta.split('/').reverse().join('/')) < new Date(pessoa2.dataDaConsulta.split('/').reverse().join('/'))){
            return -1
        } else if (new Date(pessoa1.dataDaConsulta.split('/').reverse().join('/')) > new Date(pessoa2.dataDaConsulta.split('/').reverse().join('/'))) {
            return 1
        } else {
            return 0
        }
    }
    return consultas.sort(compararDatas)
}