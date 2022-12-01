// https://developer.mozilla.org/es/docs/Web/HTTP/Status
// https://www.npmjs.com/package/xmlhttprequest
// https://fakeapi.platzi.com/

//XMLHTTP Request->
//GET PRODUCTS: [GET] https://api.escuelajs.co/api/v1/products

//primero: npm i xmlhttp-request, según la doc de npm al final .XMLHttpRequest:
const XMLHTTPRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHTTPRequest();
  //abrimos conexion: true para habilitar
  xhttp.open('GET', urlApi, true);
  //manejamos el estado de la petición
  // 0 -> no inicializado
  // 1 -> loading
  // 2 -> ya se ejecuto 
  // 3 -> interactuando con la solicitud
  // 4 -> completada la llamada
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) { //solicitud correcta
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    }
  }
  //enviamos la petición
  xhttp.send();
}

//para ejecutar lo anterior: callback hell->
fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);

  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);

    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
      if (error3) return console.log(error3)

      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    })
  })
})

//creamos el script en package.json:
//script:
// "callback": "node \src\callback\xmlhttpCallback.js"
//ejecutamos: npm run callback