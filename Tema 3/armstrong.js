function armstrong(num) {
  let cifras = String(num)
  let n = cifras.length
  let suma = 0
  for (let i = 0; i < n; i++) {
    numero = parseInt(cifras[i])
    console.log(numero)
    suma += numero ** n
  }
  return suma
}

console.log(armstrong(153))
console.log(armstrong(8208))
