'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
//const path = require('path');

const app = express();
const router = express.Router();

//CONECTA BANCO
mongoose.connect("mongodb+srv://root:senha1@testehome-dxxzh.mongodb.net/testeCarteira");

//CARREGA MODELS
const Carteira = require('./models/carteira');
const Movi = require('./models/movimentacao');

//CARREGA ROTAS
const carteiraRoute = require('./routes/carteira-routes');
const moviRoute = require('./routes/movimentacao-routes');

app.use(bodyParser.json({
    limit: '5mb' // TAMANHO MAXIMO DO JSON
}));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // QUAIS URLS PODERÃO CONECTAR '*' = TODAS.
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('carteira', { title: 'Carteira online!' })
});

app.get('/consultaCarteira', (req, res) => {
  res.render('consultaCarteira', { title: 'Consulta Carteira' })
});

app.get('/consultaHistorico', (req, res) => {
  res.render('consultaHistorico', { title: 'Consulta Carteira' })
});

app.get('/consultaMovimentacao', (req, res) => {
  res.render('consultaMovimentacao', { title: 'Consulta de Movimentacoes' })
});

app.use('/', carteiraRoute);
app.use('/', moviRoute);

module.exports = app;
