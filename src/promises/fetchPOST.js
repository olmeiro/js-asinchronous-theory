//[POST] https://api.escuelajs.co/api/v1/products/

import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors', //permisos
    credentials: 'same-origin', //by default
    headers: {
      'Content-Type': 'application/json', // puede ser un blob etc
    },
    body: JSON.stringify(data)
  });
  return response;
}

//Usamos la promesa:
//Standar de la api para crear Post:
const data = {
  "title": "New Product 2023 Diciembre",
  "price": 10999,
  "description": "A description 2023",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))

  //  id: 202
  //GET single product in browser:
//[GET] https://api.escuelajs.co/api/v1/products/202