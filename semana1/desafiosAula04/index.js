//DESAFIO 1
let grausFahrenheit = 77
let kelvin = ((grausFahrenheit - 32) * (5/9)) + 273.15
console.log("77°F em k:",kelvin,"k")

let grausCelcius = 80
grausFahrenheit = (grausCelcius * (9/5)) + 32
console.log("80°C em F:",grausFahrenheit,"°F")

grausCelcius = 30
grausFahrenheit = (grausCelcius * (9/5)) + 32
kelvin = ((grausFahrenheit - 32) * (5/9)) + 273.15
console.log("30°C equivalem a",grausFahrenheit,"°F e",kelvin,"k")

grausCelcius = Number(prompt("Insira o valor da temperatura em °C"))
grausFahrenheit = (grausCelcius * (9/5)) + 32
kelvin = ((grausFahrenheit - 32) * (5/9)) + 273.15
console.log(grausCelcius,"°C equivalem a",grausFahrenheit,"°F e",kelvin,"k")

//DESAFIO 2
const consumo = Number(prompt("Informe o consumo em KWh:"))
const custo = 0.05
const desconto = Number(prompt("Informe o desconto:"))
const conta = consumo * custo
const contaComDesconto = (1-(desconto/100))*(consumo * custo)

console.log("Conta sem desconto:",conta)
console.log("Conta com desconto:",contaComDesconto)

//DESAFIO 3
let massaLibras = 20
const conversorLibraKilogramas = 0.453592
let massaKilogramas = massaLibras * conversorLibraKilogramas
console.log(massaLibras,"lb equivalem a",massaKilogramas,"kg.")

let massaOnca = 10.5
const conversorOncaKilograma = 0.0283495
massaKilogramas = massaOnca * conversorOncaKilograma
console.log(massaOnca,"oz equivalem a",massaKilogramas,"kg.")

let distanciaMilha = 100
const conversorMilhaMetro = 1609.34
let distanciaMetro = distanciaMilha * conversorMilhaMetro
console.log(distanciaMilha,"mi equivalem a",distanciaMetro,"m.")

let distanciaPes = 50
const conversorPeMetro = 0.3048
distanciaMetro = distanciaPes * conversorPeMetro
console.log(distanciaPes,"ft equivalem a",distanciaMetro,"m.")

let volumeGalao = 103.56
const conversorGalaoLitro = 3.78541
let volumeLitro = volumeGalao * conversorGalaoLitro
console.log(volumeGalao,"gal equivalem a",volumeLitro,"L.")

let volumeXicara = 450
const conversorXicaraLitro = 0.24
volumeLitro = volumeXicara * conversorXicaraLitro
console.log(volumeXicara,"xic equivalem a",volumeLitro,"L.")

massaLibras = Number(prompt("Informe a massa em libras:"))
massaKilogramas = massaLibras * conversorLibraKilogramas
console.log(massaLibras,"lb equivalem a",massaKilogramas,"kg.")

massaOnca = Number(prompt("Informe a massa em Onças:"))
massaKilogramas = massaOnca * conversorOncaKilograma
console.log(massaOnca,"oz equivalem a",massaKilogramas,"kg.")

distanciaMilha = Number(prompt("Informe a distância em milhas:"))
distanciaMetro = distanciaMilha * conversorMilhaMetro
console.log(distanciaMilha,"mi equivalem a",distanciaMetro,"m.")

distanciaPes = Number(prompt("Informe a distância em pés:"))
distanciaMetro = distanciaPes * conversorPeMetro
console.log(distanciaPes,"ft equivalem a",distanciaMetro,"m.")

volumeGalao = Number(prompt("Informe o volume em galões:"))
volumeLitro = volumeGalao * conversorGalaoLitro
console.log(volumeGalao,"gal equivalem a",volumeLitro,"L.")

volumeXicara = Number(prompt("Informe o volume em xícaras:"))
volumeLitro = volumeXicara * conversorXicaraLitro
console.log(volumeXicara,"xic equivalem a",volumeLitro,"L.")
