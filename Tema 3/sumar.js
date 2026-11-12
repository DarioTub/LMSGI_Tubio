// funcion declarativa
function sumar(a, b = 0) {
  return a + b
}
let suma = sumar(2, 3) // 5
console.log(suma)

const sumaflecha = (a, b = 0) => {
  let resultado = a + b
  return resultado
}
console.log(sumaflecha(2, 3))

function repetir(veces, funcion) {
  for (let i = 0; i < veces; i++) {
    funcion(i)
  }
}
repetir(3, (i) => console.log('Repeticion', sumar(i)))

function sumarTodos(limite, accion) {
  let resultado = 0
  for (let i = 0; i < limite; i++) {
    resultado = accion(i)
  }
  return resultado
}

let resultado = sumarTodos(3, (i) => {
  return i
})
