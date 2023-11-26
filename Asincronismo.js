/* Fundamentos */

console.log('1) calentar agua');
console.log('2) Vertir cafe');
console.log('3) vertir azucar');
//siguiente instruccion despues del paso 3
//pero por timeout esta orden no se ejecuta a
setTimeout(function() {
console.log('3.1) revisar la etiqueta del cafe');
}, 6000//tiempo en segundos para ejecutar la instruccion
);
console.log('4) Mezclar');

/* Codigo sincronico vs asinncronico */
//Codigo sincronico
function espera(detalle) {
//generar proceso para poder establer el timpo de respuesta
  for (let index = 0; index < 10000000000; index++) 
  {
  }
  return `${detalle}`
}
console.log("Recepcion de productos")
console.log("Revisa a lista de los productos")
console.log("Revisa el estado del producto")
const tiempoDeEspera = espera("Revisa el nuevo catalogo")
console.log(tiempoDeEspera)
console.log("Firma del recibo");

//Asincronico

function espera(detalle) {
  console.log(`${detalle}`)
}

console.log("Recepcion de productos");
console.log("Revisa lista de los productos entregados");
console.log("Revisa el estado de los productos");

const data = setTimeout(()=>espera("Revisar nuevo catálogo"),5000)
console.log("Firma de recibo");


/* Promesas */

function obtenerDatosDeAPI() {
    return new Promise((resolve, reject) => {
      fetch('https://api.ejemplo.com/data')
        .then(response => {
          if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  // Llamamos a la función que retorna una promesa para obtener datos de la API
  obtenerDatosDeAPI()
    .then(data => {
      console.log('Datos obtenidos:', data);
    })
    .catch(error => {
      console.error('Error al obtener datos:', error);
    });

    
/* Async-Await */

async function obtenerDatosDeAPI() {
    try {
      const response = await fetch('https://api.ejemplo.com/data');
  
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  // Llamamos a la función async para obtener datos de la API
  (async () => {
    try {
      const data = await obtenerDatosDeAPI();
      console.log('Datos obtenidos:', data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  })();
  