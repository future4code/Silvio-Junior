// a) Para acessar o valor de entrada no Node usamos process.argv[i].

// b)
// c)

let nome = process.argv[2] || ''
let idade = Number(process.argv[3]) || ''



if (process.argv.length === 4 && typeof(idade) === 'number'){
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}.`)
} else if (process.argv.length !== 4){
    console.log(`Esperava 2 argumentos e recebi ${process.argv.length - 2}`)
} else if (typeof(idade) !== 'number'){
    console.log('O segundo argumento passado deve ser a idade. Ou seja, um número.')
}






