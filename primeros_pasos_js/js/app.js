// ===== Paso 1: primera instrucción =====
console.log("¡Hola! Este es mi primer programa en JavaScript");

// ===== Paso 2: variables =====
let alumno = "Lucía";
let edad = 18;
console.log(alumno, edad);
edad = 19;
console.log("Nueva edad:", edad);

// ===== Paso 3: constantes =====
const PRECIO_BOCADILLO = 3.5;
const PRECIO_ZUMO = 1.5;
console.log("Bocadillo:", PRECIO_BOCADILLO, "Zumo:", PRECIO_ZUMO);

// ===== Paso 4: tipos de datos =====
const curso = "1.º ASIR";
const matriculado = true;
let tutor;
const aula = null;
console.log(typeof curso, typeof edad, typeof matriculado, typeof tutor, typeof aula);
console.log(typeof 18, typeof "18");

// ===== Paso 5: operadores aritméticos =====
let bocadillos = 2;
let zumos = 1;
const subtotal = bocadillos * PRECIO_BOCADILLO + zumos * PRECIO_ZUMO;
console.log("Subtotal:", subtotal);
console.log(10 + 4 * 2, (10 + 4) * 2);
console.log("Resto de 17 / 5:", 17 % 5, "| 2 elevado a 3:", 2 ** 3);
bocadillos++;
zumos += 2;
console.log("Bocadillos:", bocadillos, "Zumos:", zumos);

// ===== Paso 6: textos y conversiones =====
const saludo = "Hola, " + alumno;
console.log(saludo);
console.log(`${alumno} tiene ${edad} años y estudia ${curso}`);
console.log("5" + 2, "5" * 2, Number("5") + 2);

// ===== Paso 7: comparaciones y operadores lógicos =====
const dinero = 15;
console.log(dinero >= subtotal, dinero < 5);
console.log("5" == 5, "5" === 5, 7 !== 7);
const esMayor = edad >= 18;
const tieneDinero = dinero >= subtotal;
console.log(esMayor && tieneDinero, esMayor || false, !matriculado);

// ===== Comprobación final: el ticket de la cafetería =====
const IVA = 0.1;
const total = subtotal + subtotal * IVA;
const cambio = dinero - total;
const alcanza = dinero >= total;
console.log(`Ticket de ${alumno}: subtotal ${subtotal} €, total con IVA ${total} €`);
console.log(`¿Le alcanza con ${dinero} €? ${alcanza}. Cambio: ${cambio} €`);