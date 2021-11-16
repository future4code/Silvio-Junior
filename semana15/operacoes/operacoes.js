let operacao = process.argv[2] || ""
let primeiroNumero = Number(process.argv[3]) || ''
let segundoNumero = Number(process.argv[4]) || ''

let resultado

switch (operacao){
    case 'soma':
        resultado = primeiroNumero + segundoNumero
        break
    case 'subtracao':
        resultado = primeiroNumero - segundoNumero
        break
    case 'multiplicacao':
        resultado = primeiroNumero * segundoNumero
        break
    case 'divisao':
        resultado = primeiroNumero / segundoNumero
        break
    default:
        resultado = 'Você não entrou com uma operação válida. \nAs operações válidas são:\nsoma\ndivisao\nsubtracao\nmultiplicacao'
}

if (typeof(primeiroNumero) === 'number' && typeof(segundoNumero) === 'number'){
    console.log(`Resposta: ${resultado}`)
} else {
    console.log('\033[31mO Primeiro argumento passado deve ser a operação, o segundo e o terceiro, os números.')
}
