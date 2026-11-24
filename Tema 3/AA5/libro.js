let titulo = document.getElementById('titulo')
console.log(titulo.textContent)

let autor = document.querySelector('.autor')
console.log(autor.textContent)

let precio = document.getElementById('precio')
console.log(Number(precio.textContent) + Number(precio.textContent) * 0.07)

let imagen = document.getElementById('portada')
console.log(portada.getAttribute('src'))
console.log(portada.getAttribute('alt'))

let url = document.getElementById('enlace')
console.log(url.getAttribute('href'))

let capitulos = document.querySelectorAll('#capitulos li')
console.log(capitulos.length)
capitulos.forEach((capitulo, index) => {
  console.log(index + 1 + ' ' + capitulo.textContent)
})

console.log(capitulos[0].textContent)
console.log(capitulos[capitulos.length - 1].textContent)
