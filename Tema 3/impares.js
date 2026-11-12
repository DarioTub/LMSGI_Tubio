/*
Dado un numero entero, devuelva  el numero de impares existentes entre 1 y el numero dado
*/
function impares(num) {
  let contador = 0
  for (let i = 1; i < num; i++) {
    if (i % 2 != 0) {
      contador++
    }
  }
  return contador
}

console.log(impares(100))
console.log(impares(7))
