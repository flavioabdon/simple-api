const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hola, el servidor está vivo 🚀');
});

app.get('/stress', (req, res) => {
  // Simula una carga artificial de CPU
  const end = Date.now() + 1000; // 1 segundo
  while (Date.now() < end) {}
  res.send('Carga procesada 🧠');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor escuchando en http://0.0.0.0:${port}`);
});