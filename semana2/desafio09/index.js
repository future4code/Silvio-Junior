// const numeroEscolhido = Number(prompt("Jogador 1, informe o número a ser escolhido:"))
// let numeroDaVez = Number(prompt("Jogador 2, dê seu chute:"))
// aux = 0

// while (numeroDaVez !== numeroEscolhido){
//     console.log(`O número chutado foi: ${numeroDaVez}`)
//     if (numeroDaVez < numeroEscolhido){
//         console.log(`Errrrrrrrrou, é maior`)
//     } else {
//         console.log(`Errrrrrrrou, é menor`)
//     }
//     numeroDaVez = Number(prompt("Jogador 2, dê seu chute:"))
//     aux ++
// }
// console.log(`Acertou!!!!!\nO número de tentativas foi: ${aux}`)

const numeroEscolhido = Math.floor(Math.random() * 101)
let numeroDaVez = Number(prompt("Jogador, dê seu chute no intervalo [0,100]:"))
let intervaloMenor = 0
let intervaloMaior = 100
aux = 0

while (numeroDaVez !== numeroEscolhido){
    console.log(`O número chutado foi: ${numeroDaVez}`)
    if (numeroDaVez < numeroEscolhido){
        if (numeroDaVez < intervaloMenor){
            console.log("Jogador, preste atenção ao intervalo do chute!")
        } else {
            intervaloMenor = numeroDaVez
            console.log(`Errrrrrrrrou, é maior`)
        }
    } else {
        if (numeroDaVez > intervaloMaior){
            console.log("Jogador, preste atenção ao intervalo do chute!")
        } else {
            intervaloMaior = numeroDaVez
            console.log(`Errrrrrrrou, é menor`)
        }
    }
    numeroDaVez = Number(prompt(`Jogador, dê seu chute no intervalo [${intervaloMenor},${intervaloMaior}]:`))
    aux ++
}
console.log(`Acertou!!!!!\nO número de tentativas foi: ${aux}`)

/* Achei as alterações tranquilas, com uma facilidade para encontrar conteúdo na internet para auxiliar. 
Fiz algumas coisas a mais e tive ideias de outras para deixar o jogo mais interessante. */