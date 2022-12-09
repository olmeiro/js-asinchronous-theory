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

function* dub() {
  let count;
  while (true) {
    count = yield;
    console.log("dub", count);
    sound("lub", ++count);
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