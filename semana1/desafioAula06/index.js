//1.
const imprimirParametro = (parametro) => {
    console.log(parametro)
}
const realizaSoma = (numero1,numero2) => {
    soma = numero1 + numero2
    imprimirParametro(soma)
}
realizaSoma(2,3)

//2.
const calculaPitagoras = (catetoAdjacente,catetoOposto) => {
    hipotenusa = Math.sqrt((catetoAdjacente**2)+(catetoOposto**2))
    imprimirParametro(hipotenusa)
}
calculaPitagoras(3,4)