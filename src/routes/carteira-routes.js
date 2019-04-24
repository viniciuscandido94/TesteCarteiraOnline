'use strict'

const express = require("express");
const router = express.Router();
const controller = require('../controllers/carteira-controller');

router.post( '/', controller.post);
router.post( '/valorCarteira', controller.getByidCarteiraUserValor);
router.get( '/valorCarteira/:idcarteira', controller.getByidCarteiraUserValor);
router.post( '/historico', controller.getByidCarteiraUserHistorico);
router.get( '/historico/:idcarteira', controller.getByidCarteiraUserHistorico);

module.exports = router;
