const express = require('express')
const app = express();

app.get('/', (request, response) => {
  console.log('Llamado GET');
  response.send('Hola desde express');
});

app.listen(9000, () => {
  console.log('Escunchando en el puerto 9000')
})