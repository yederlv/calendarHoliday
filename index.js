const express = require('express');
const app = express();
const port = 3000;

// Middleware para analizar las solicitudes con formato JSON
app.use(express.json());

// Rutas de la API
const feriadosRouter = require('./src/routes/feriados');

// Rutas de la API
app.use('/api/v1/feriados', feriadosRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
