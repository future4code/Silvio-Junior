//a)
var amostraDeIdades = {
    numeros: [12, 32, 24, 54, 100, 1, 32, 45, 23],
    obterEstatisticas: function (numeros) {
        var numerosOrdenados = numeros.sort(function (a, b) { return a - b; });
        var soma = 0;
        for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
            var numero = numeros_1[_i];
            soma += numero;
        }
        var estat = {
            maior: numerosOrdenados[numerosOrdenados.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        };
        return estat;
    }
};
console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros));
