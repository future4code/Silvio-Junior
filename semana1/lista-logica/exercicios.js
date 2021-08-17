// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Altura:"))
  const largura = Number(prompt("Largura:"))
  console.log(altura * largura)
}
// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoDeNascimento = Number(prompt("Em que ano nasceu?"))
  console.log(anoAtual-anoDeNascimento)
}
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura**2)
}
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Nome:")
  const idadeUsuario = Number(prompt("Idade:"))
  const eMailUsuario = prompt("E-mail:")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${eMailUsuario}.`)
}
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Primeira cor:")
  const cor2 = prompt("Segunda cor:")
  const cor3 = prompt("Terceira cor:")
  console.log([cor1,cor2,cor3])
}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso
}
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const aux = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = aux
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Informe ano atual:"))
  const anoDeNascimento = Number(prompt("Informe ano de nascimento:"))
  const anoIdentidade = Number(prompt("Informe ano de emissão da identidade:"))
  const idadeUsuario = anoAtual - anoDeNascimento
  const idadeIdentidade = anoAtual - anoIdentidade
  console.log(((idadeUsuario <= 20) && (idadeIdentidade >= 5)) || ((20 < idadeUsuario) && (idadeUsuario <= 50) && (idadeIdentidade >= 10)) || ((50 < idadeUsuario) && (idadeIdentidade >= 15)))
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ((ano%400 === 0) || ((ano%4 === 0) && !((ano%100 === 0) && (ano%400 !== 0))))

}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você é maior de 18 anos?")
  const escolaridade = prompt("Possui ensino medio completo?")
  const horario = prompt("Possui disponibilidade no horario do curso?")
  console.log((idade.toLowerCase() === "sim") && (escolaridade.toLowerCase() === "sim") && (horario.toLowerCase() === "sim"))
}