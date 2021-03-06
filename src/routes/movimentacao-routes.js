'use strict'

const express = require("express");
const router = express.Router();
const controller = require('../controllers/movimentacao-controller');

router.post( '/', controller.postMovi);
router.get( '/grafico/:tipoMovi', controller.getByCategoriaTipoMov);
router.get( '/ultimosmov', controller.getByUltimosMov);

module.exports = router;
