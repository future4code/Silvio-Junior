//a)

//A função possui como entrada uma array de números, e como uma saída um objeto contendo 3 números.

//c)

type ObjetoRetorno = {
    maior: number,
    menor: number, 
    media: number
}

type Amostra = {
    numeros: number[],
    obterEstatisticas: (numero: number[]) => ObjetoRetorno
}

const amostraDeIdades: Amostra = {
    numeros: [12, 32, 24, 54, 100, 1, 32, 45, 23],
    obterEstatisticas: (numeros) => {
        const numerosOrdenados: number[] = numeros.sort((a: number, b: number) => a - b)

        let soma: number = 0

        for (let numero of numeros){
            soma += numero
        }

        const estat: ObjetoRetorno = {
            maior: numerosOrdenados[numerosOrdenados.length - 1],
            menor: numerosOrdenados[0],
            media: soma/numeros.length
        }

        return estat
    }
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))