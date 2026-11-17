const PI = 3.14
function calcularArea(r) {
  return PI * r ** 2
}
function perimetro(r) {
  return 2 * PI * r
}
let numero = 50
function sumaNaturales(num) {
  let i = 1
  let total = 0
  while (i < num) {
    total += i
    i++
  }
  return total
}
console.log('Suma: ' + sumaNaturales(numero))

let numeros = [1, 2, 3, 4, 5]
function media(num) {
  let total = 0
  let totalNumeros = 0
  for (i = 0; i < num.length; i++) {
    total += num[i]
    totalNumeros++
  }
  let media = total / totalNumeros
  return media
}

console.log('Media ' + media(numeros))
