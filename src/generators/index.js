// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Olmeiro', 'Ana', 'Aleja', 'Juan']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //undefined


//counter generator:
function* counter() {
  let count = 0;
  while (true) {
    count += 1;
    yield count;
  }
}

const gen = counter()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// es más facil escribirlo de la siguiente forma, porque usar generator:
function tipicalCounter() {
  let count = 0;
  return function counter_generator() { //closure
    count += 1;
    return count;
  }
}

const gen1 = tipicalCounter();
console.log(gen1());
console.log(gen1());
console.log(gen1());

//Generators can allow you to have a very complex control flow
//We can use Generators for not only for generating the values but also consuming the values.
function* listener() {
  console.log("listening...")
  while (true) {
    let msg = yield;
    console.log('heard:', msg)
  }
}
//chatty app:
let ask = listener();
ask.next('Are you listening?')
ask.next('How about now?')
ask.next('Still there?')

// a yield is like a two-lane highway.
// We can't just use it to generate values, we can also pass in values with .next(input)

// Bravo - Con sólo unas pocas líneas de código, hemos creado una aplicación similar a un chat.

// Los generadores no sólo son parlanchines, sino también buenos recordando cosas

//to remember data:
//generators can be stateful, but they keep their state hidden in the closure.:
function* ATM_Machine() {
  let balance = 100;
  while (balance >= 0) {
    balance += yield balance;
  }
  return 'No Cash!'
}

let transaction = ATM_Machine();
console.log(transaction.next());
console.log(transaction.next(-50));
console.log(transaction.next(-50));
console.log(transaction.next(-50));

// Now here is the most exciting part — If you know something about the stacks, we know there is a limit to it.

// If we tried something like this:
function a() {
  return b();
}

function b() {
  return a();
}

b() //RangeError: Maximum call stack size exceeded
//This is where Generators become really interesting:They can surpass JavaScript stack limit! You can literally do an infinite sequence of function calls.You can literally do an infinite sequence of function calls.

//hearbeat simulation:
let heart = {};
let beat = [];

function sound(name, msg) {
  if (msg < 1000 || msg % 10000 === 0) {
    console.log(msg);
  }
  if (msg > 100_000) {
    return console.log("Surpassed Javascript!");
  }
  beat.push([name, msg]);
}

//generator
function* lub() {
  let count;
  while (true) {
    count = yield;
    console.log("lub", count);
    sound("dub", ++count);
  }
}

function alive() {
  while (beat.length) {
    let [name, msg] = beat.shift();
    heart[name].next(msg);
  }
}

heart.lub = lub();
sound("lub", "get ready");
heart.dub = dub();
sound("dub", "get ready")

sound("lub", 0);
alive()

//prueba el código: P.S. we can do some crazy async flow using Generators.
//node hearbeat.js
//https://www.youtube.com/watch?v=DqMFX91ToLw&t=1054s