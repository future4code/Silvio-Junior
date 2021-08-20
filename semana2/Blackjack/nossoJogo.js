/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const boasVindas = () =>  {
   if (confirm ("Deseja iniciar uma rodada?")) { 
      console.log("Nova rodada:")
      inicioDeJogo()
   } else {
      console.log("Fim de jogo!")
   }
}

const inicioDeJogo = () => {
   const cartasDoUsuario = [comprarCarta(),comprarCarta()]
   const cartasDoComputador = [comprarCarta(),comprarCarta()]
   const valorCartasUsuario = cartasDoUsuario[0].valor + cartasDoUsuario[1].valor
   const valorCartasComputador = cartasDoComputador[0].valor + cartasDoComputador[1].valor

   console.log(`Usuário - cartas: ${cartasDoUsuario[0].texto} ${cartasDoUsuario[1].texto} - pontuação: ${valorCartasUsuario}`)
   console.log(`Computador - cartas: ${cartasDoComputador[0].texto} ${cartasDoComputador[1].texto} - pontuação: ${valorCartasComputador}`)

   indicaVencedor(valorCartasUsuario,valorCartasComputador)
}

const indicaVencedor = (usuario,computador) => {
   if (usuario > computador) { 
      console.log("O usuário ganhou!")
   } else if (usuario < computador) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }
   boasVindas()
}

console.log("Boas vindas ao jogo de Blackjack!")
boasVindas()