// En este desafío debes crear una función que usando fetch haga llamadas a una API y esta función debe contar las siguientes características:

// Realiza la transformación de datos a JSON
// Solo permite hacer peticiones tipo GET
// Recibir como parámetro de entrada un string que será la URL
// Validar que una URL sea correcta, si no lo es debe lanzar un error con el mensaje Invalid URL
// Si la URL tiene el formato correcto, pero no existe, debería lanzar un error con el mensaje Something was wrong
// Recuerda, para lanzar el error debes usar throw, ejemplo:

// throw new Error('Something was wrong');

// Para solucionarlo vas a encontrar una función llamada fetchData que recibe un parámetros de entrada:

// url: La url de la API.
// Dentro del cuerpo de la función fetchData debes escribir tu solución.
export async function runCode(url) {
  const options = {
    method: "GET",
  };
  async function fetchApi(urlApi, opt) {
    const response = await fetch(urlApi, opt);
    const data = await response.json();
    return data;
  }
  function comprobanteUrl(miurl) {
    try {
      new URL(miurl);
      return true;
    } catch (err) {
      return false;
    }
  }
  if (!comprobanteUrl(url)) {
    throw new Error("Invalid URL");
  }

  try {
    const datos = await fetchApi(url, options);
    return datos;
  } catch (err) {
    throw new Error("Something was wrong");
  }
}

//otra forma:
// Fetch API
async function fetchData(urlApi) {
  const options = {
    method: 'GET'
  };

  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

export async function runCode2(url) {
  // Tu código aquí 👈
  // URL Verification
  try {
    new URL(url);
  } catch (e) {
    throw new Error("Invalid URL");
  }

  // Return data or error in the promise
  try {
    const data = await fetchData(url);
    return data
  } catch {
    throw new Error("Something was wrong");
  }
}

//otra forma:
export async function runCode1(url) {
  try {
    new URL(url);
  } catch (error) {
    throw new Error("Invalid URL");
  }
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch {
    throw new Error("Something was wrong");
  }
}

//   Ejemplo 1:

// Input:
// await fetchData('https://api.escuelajs.co/api/v1/categories');

// Output
// // return data in json
// [...]

// Ejemplo 2:

// Input:
// await fetchData('----');

// Output
// Error: Invalid URL

// Ejemplo 3:

// Input:
// await fetchData('https://domain-a.com/api-1');

// Output:
// Error: Something was wrong
