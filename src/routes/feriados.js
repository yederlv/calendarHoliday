// routes/feriados.js
const express = require('express');
const router = express.Router();

// Importa el controlador correspondiente
const feriadosController = require('../controllers/feriadosController');

// Ruta para obtener todos los días feriados en Perú en 2023
router.get('/', feriadosController.getAllFeriados);

module.exports = router;
