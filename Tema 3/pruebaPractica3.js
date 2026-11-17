import { calcularArea, perimetro } from 'pruebaPractica3.js'
let radio = prompt('Introduce el radio')
console.log(
  'El area del circulo es: ' +
    calcularArea(radio) +
    ' y el perímetro es: ' +
    perimetro(radio),
)
