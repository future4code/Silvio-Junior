```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let quantidade = 0
  for (elemento of array) {
    if (elemento = numeroEscolhido){
      quantidade = quantidade + 1
    }
  }
  
  let mensagem = ``
  if (numeroEscolhido === 3){
    mensagem = `Número não encontrado`
  }else {
    mensagem =`O número ${numeroEscolhido} aparece ${quantidade}x`
  }
  return mensagem
}
```