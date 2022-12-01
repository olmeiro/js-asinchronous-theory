// https://developer.mozilla.org/es/docs/Glossary/Callback_function

//Callback: función que recibe otra función para ser ejecutada.

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(3, 5, sum));
//para usar run code señalo el código, click derecho run code.

//la función se puede llamar de cualquier manera además de callback.

//setimeout:Por sí misma es un callback
setTimeout(() => {
  console.log("Hola Javascript.")
}, 2000);

function gretting(name) {
  console.log(`Hola soy ${name}`);
}

//pasamos los argumentos de gretting en el tercer parámetro->
setTimeout(gretting, 1000, 'OLmeiro');

