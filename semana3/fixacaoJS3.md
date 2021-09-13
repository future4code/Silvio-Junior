```
function calculaNota(ex, p1, p2) {
  const media = (ex + 2*p1 + 3*p2)/6 
  if (media >= 9){
    return A
  } else if ((media >= 7.5) && (media < 9)) {
    return B
  } else if ((media >= 6) && (media < 7.5)){
    return C
  } else {
    return D
  }
}
```