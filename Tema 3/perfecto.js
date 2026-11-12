function numeroPerfecto(numero) {
  let suma = 0
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      suma += i
    }
  }
  return suma === numero
}

const sumaPerfecto = (numero) => {
  let suma = 0
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      suma += i
    }
  }
  return suma === numero
}
console.log(sumaPerfecto(6))
console.log(sumaPerfecto(28))
console.log(sumaPerfecto(496))
console.log(sumaPerfecto(12))
