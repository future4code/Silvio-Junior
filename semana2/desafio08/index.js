//1.
const filmeUsuario = prompt("Informe o gênero do filme:")
const precoIngresso = Number(prompt("Informe o valor do ingresso:"))

if ((filmeUsuario.toLowerCase() === "fantasia") && (precoIngresso < 15)){
    const lanche = prompt("Qual o lanche?")
    console.log(`Bom filme!\nAproveite o ${lanche}.`)
}

//2.
const nomeUsuario = prompt("Informe seu nome:")
var tipoDeJogo = prompt("Informe o tipo de jogo:\nIN para jogos internacionais.\nDO para jogos domésticos.")
var etapaDoJogo = prompt("Informe a etapa do jogo:\nSF para semi-finais.\nDT para decisão de terceiro lugar.\nFI para final.")
const categoriaUsuario = Number(prompt("Informe a categoria desejada:\n1, 2, 3 ou 4."))
const quantidadeDeIngressos = Number(prompt("Informe a quantidade de Ingressos desejados:"))

if (categoriaUsuario === 1) {
    if (etapaDoJogo.toUpperCase() === "SF") {
        var precoUnitario = 1320
        etapaDoJogo = "Semi-Final"
    } else if(etapaDoJogo.toUpperCase() === "DT") {
        var precoUnitario = 660
        etapaDoJogo = "Decisão de Terceiro Lugar"
    } else if (etapaDoJogo.toUpperCase() === "FI") {
        var precoUnitario = 1980
        etapaDoJogo = "Final"
    } else {
        console.log("Informe uma etapa válida.")
    }
} else if (categoriaUsuario === 2) {
    if (etapaDoJogo.toUpperCase() === "SF") {
        var precoUnitario = 880
        etapaDoJogo = "Semi-Final"
    } else if(etapaDoJogo.toUpperCase() === "DT") {
        var precoUnitario = 440
        etapaDoJogo = "Decisão de Terceiro Lugar"
    } else if (etapaDoJogo.toUpperCase() === "FI") {
        var precoUnitario = 1320
        etapaDoJogo = "Final"
    } else {
        console.log("Informe uma etapa válida.")
    }
} else if(categoriaUsuario === 3) {
    if (etapaDoJogo.toUpperCase() === "SF") {
        var precoUnitario = 550
        etapaDoJogo = "Semi-Final"
    } else if(etapaDoJogo.toUpperCase() === "DT") {
        var precoUnitario = 330
        etapaDoJogo = "Decisão de Terceiro Lugar"
    } else if (etapaDoJogo.toUpperCase() === "FI") {
        var precoUnitario = 880
        etapaDoJogo = "Final"
    } else {
        console.log("Informe uma etapa válida.")
    }
} else if (categoriaUsuario === 4) {
    if (etapaDoJogo.toUpperCase() === "SF") {
        var precoUnitario = 220
        etapaDoJogo = "Semi-Final"
    } else if(etapaDoJogo.toUpperCase() === "DT") {
        var precoUnitario = 170
        etapaDoJogo = "Decisão de Terceiro Lugar"
    } else if (etapaDoJogo.toUpperCase() === "FI") {
        var precoUnitario = 330
        etapaDoJogo = "Final"
    } else {
        console.log("Informe uma etapa válida.")
    }
} else {
    console.log("Informe uma categoria válida")
}

if (tipoDeJogo.toUpperCase() === "IN"){
    precoUnitario = precoUnitario * 4.10
    tipoDeJogo = "Internacional"
} else {
    tipoDeJogo = "Domestico"
}

console.log(`--- Dados da compra ---\nNome do cliente: ${nomeUsuario}\nTipo de Jogo: ${tipoDeJogo}\nEtapa de jogo: ${etapaDoJogo}\nCategoria: ${categoriaUsuario}\nQuantidade de Ingressos: ${quantidadeDeIngressos}\n--- Valores ---\nValor do Ingresso: R$${precoUnitario}\nValor Total: R$${precoUnitario * quantidadeDeIngressos}`)