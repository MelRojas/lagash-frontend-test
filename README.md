This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Frontend Test - Melanie Rojas
Email: melanie.rojasguerra@gmail.com<br />
Teléfono: +5492612062051

## Instrucciones para levantar API de pruebas

La versión online de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) permite request de todo tipo, pero cuando se hace un request del tipo POST, PUT o DELETE los cambios no persisten, por lo tanto para poder probar el ejercicio de UI es necesario levantar la API de forma local, para esto correr

### `npm install -g json-server`

Luego, dentro de la carpeta del proyecto de UI, correr el siguiente comando

### `json-server --watch --port=4000 data.json`

## Instrucciones para levantar el proyecto de UI

Luego de clonar el repositorio y dentro de la carpeta correr 

### `npm install`

Crear un archivo `.env` y agregar

### `REACT_APP_API_URL='http://localhost:4000'`

Para levantar el proyecto correr

### `npm start`
