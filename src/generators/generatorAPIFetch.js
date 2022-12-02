import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

//fetchData generator:
async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json()
  return data;
}

async function* iterData(urlApi) {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    //Se utiliza yield para dar una pausa a la ejecucion y utilizamos .next() para dar inicio a el codigo
    yield console.log("products: ", products[20]);
    yield console.log("product", product.title);
    yield console.log("Category: ", category);

  } catch (error) {
    console.log(error);
  }
}

const generatorData = iterData(API);
generatorData.next().value;
generatorData.next().value;
generatorData.next().value;