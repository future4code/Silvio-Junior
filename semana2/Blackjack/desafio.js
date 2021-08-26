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
      let cartasDoUsuario = []
      let cartasDoComputador = []
      cartasDoUsuario = [comprarCarta(),comprarCarta()]
      cartasDoComputador = [comprarCarta(),comprarCarta()]
      let valorCartasUsuario = cartasDoUsuario[0].valor + cartasDoUsuario[1].valor
      let valorCartasComputador = cartasDoComputador[0].valor + cartasDoComputador[1].valor

      if ((cartasDoUsuario[0].texto.includes("A") && cartasDoUsuario[1].texto.includes("A")) || (cartasDoComputador[0].texto.includes("A") && cartasDoComputador[1].texto.includes("A"))) {
         console.log("As cartas devem ser sorteadas novamente!")
         inicioDeJogo()
      } else {
         console.log(`Usuário - cartas: ${cartasDoUsuario[0].texto} ${cartasDoUsuario[1].texto} - pontuação: ${valorCartasUsuario}`)
         console.log(`Computador - cartas: ${cartasDoComputador[0].texto} - pontuação: ${cartasDoComputador[0].valor}`)
         jogadorCompraCarta(cartasDoUsuario,cartasDoComputador)
      }
   
   }
   
   const jogadorCompraCarta = (cartasDoUsuario,cartasDoComputador) => {
      let textoCartasDoUsuario = ""
      let valorCartasUsuario = 0
      let continuaPartida = true
      while (confirm("Jogador, quer comprar mais uma carta?")){
         cartasDoUsuario.push(comprarCarta())
         for (i = 0; i < cartasDoUsuario.length; i ++){
            valorCartasUsuario = valorCartasUsuario + cartasDoUsuario[i].valor
         }
         for (i = 0; i < cartasDoUsuario.length; i++){
            textoCartasDoUsuario = textoCartasDoUsuario + cartasDoUsuario[i].texto + " "
         }
         if (valorCartasUsuario > 21) {
            console.log(`Usuario - cartas: ${textoCartasDoUsuario} - valor: ${valorCartasUsuario}`)
            console.log("Jogador perdeu, valor > 21!")
            continuaPartida = false
            boasVindas()
            break
         } else {
            console.log(`Usuario - cartas: ${textoCartasDoUsuario} - valor: ${valorCartasUsuario}`)
         }
      }
      if (continuaPartida) {
         textoCartasDoUsuario = ""
         valorCartasUsuario = 0
         for (i = 0; i < cartasDoUsuario.length; i ++){
            valorCartasUsuario = valorCartasUsuario + cartasDoUsuario[i].valor
         }
         for (i = 0; i < cartasDoUsuario.length; i++){
            textoCartasDoUsuario = textoCartasDoUsuario + cartasDoUsuario[i].texto + " "
         }
         console.log(`Usuario - cartas: ${textoCartasDoUsuario} - valor: ${valorCartasUsuario}`)
         computadorCompraCarta(cartasDoUsuario,cartasDoComputador)
      }
   }

   const computadorCompraCarta = (cartasDoUsuario,cartasDoComputador) => {
      valorCartasComputador = 0
      let continuaPartida = true
      for (i = 0; i < cartasDoComputador.length; i ++){
         valorCartasComputador = valorCartasComputador + cartasDoComputador[i].valor
      }
      valorCartasUsuario = 0
      for (i = 0; i < cartasDoUsuario.length; i ++){
         valorCartasUsuario = valorCartasUsuario + cartasDoUsuario[i].valor
      }
      let textoCartasDoComputador = ""
      while (valorCartasComputador < valorCartasUsuario){
         cartasDoComputador.push(comprarCarta())
         valorCartasComputador = 0
         for (i = 0; i < cartasDoComputador.length; i ++){
            valorCartasComputador = valorCartasComputador + cartasDoComputador[i].valor
         }
         for (i = 0; i < cartasDoComputador.length; i++){
            textoCartasDoComputador = textoCartasDoComputador + cartasDoComputador[i].texto + " "
         }
         if (valorCartasComputador > 21) {
            console.log(`Computador - cartas: ${textoCartasDoComputador} - valor: ${valorCartasComputador}`)
            console.log("Computador perdeu, valor > 21!")
            continuaPartida = false
            boasVindas()
            break
         } else {
            console.log(`Computador - cartas: ${textoCartasDoComputador} - valor: ${valorCartasComputador}`)
         }
      }
      if (continuaPartida) {
         valorCartasComputador = 0
         textoCartasDoComputador = ""
         for (i = 0; i < cartasDoComputador.length; i ++){
            valorCartasComputador = valorCartasComputador + cartasDoComputador[i].valor
         }
         for (i = 0; i < cartasDoComputador.length; i++){
            textoCartasDoComputador = textoCartasDoComputador + cartasDoComputador[i].texto + " "
         }
         console.log(`Computador - cartas: ${textoCartasDoComputador} - valor: ${valorCartasComputador}`)
         indicaVencedor(valorCartasUsuario,valorCartasComputador)
      }
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