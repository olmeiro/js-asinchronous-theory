//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
//Promesas: pending - fullfil - rejected

const promise = new Promise(function (resolve, reject) {
  resolve("hey!");
});

//caso real:
const cows = 9;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm.`);
  } else {
    reject("There is not cows in the farm.");
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally.");
  });
