/* Exercícios de interpretação de código
1.
faz o somatório de 0 até 4; será impresso 10.

2.a)
19
21
23
25
27
30

b)
Não, para esses casos o for, ou mesmo o while, são mais 
indicados.

3.
*
**
***
****

*/

//Exercícios de escrita
//1.
const quantidadeDePets = Number(prompt("Quantos bichos de estimação você tem?"))


if (quantidadeDePets > 0){
    const listaDosPets = []
    i = 0
    while (i < quantidadeDePets){
        const nomeDoPet = prompt("Informe o nome do pet:")
        listaDosPets.push(nomeDoPet)
        i ++
    }
    console.log(listaDosPets)
} else {
    console.log("Que pena! Você pode adotar um pet!")
}

//2.a)
const arrayOriginal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const imprimeValores = (array) => {
    for (let item of array){
        console.log("Impressão item a item:",item)
    }
}
//b)
const imprimeValoresDivididoPorDez = (array) => {
    for (let item of array){
        console.log("Impressão item a item/10:",item/10)
    }
}
//c)
const paresDoArray = (array) => {
    const arrayDePares = []
    for (let item of array){
        if (item%2 === 0){
            arrayDePares.push(item)
        }
    }
    console.log("Array de pares:",arrayDePares)
}
//d)
const infoDaArray = (array) => {
    const arrayDeInformacao = []
    for (let i = 0; i < array.length; i++){
        arrayDeInformacao.push(`O elemento do index ${i} é: ${array[i]}`)
    }
    console.log("Array das informações:",arrayDeInformacao)
}
//e)
const extremosDaArray = (array) => {
    let maior = array[0]
    let menor = array[0]
    for (let item of array){
        if (item > maior){
            maior = item
        } else if (item < menor){
            menor = item
        }
    }
    console.log(`O maior: ${maior}\nO menor: ${menor}`)
}

imprimeValores(arrayOriginal)
imprimeValoresDivididoPorDez(arrayOriginal)
paresDoArray(arrayOriginal)
infoDaArray(arrayOriginal)
extremosDaArray(arrayOriginal)