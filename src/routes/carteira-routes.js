'use strict'

const express = require("express");
const router = express.Router();
const controller = require('../controllers/carteira-controller');

router.post( '/', controller.post);
router.get( '/valorCarteira/:idCarteiraUser', controller.getByidCarteiraUserValor);
router.get( '/historico/:idCarteiraUser', controller.getByidCarteiraUserHistorico);

module.exports = router;
