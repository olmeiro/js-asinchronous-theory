// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function

const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async"), 2000)
      : reject(new Error("Error!"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something); //espera a que se resuelva la promesa.
  console.log("hello after async!")
}

console.log("Before");
anotherFn();
console.log("after")