// controllers/feriadosController.js
const feriadosPeru2023 = require('../data/feriadosPeru2023.json');

// Controlador para obtener todos los días feriados en Perú en 2023
const getAllFeriados = (req, res) => {
  res.json(feriadosPeru2023);
};

module.exports = {
  getAllFeriados
};
