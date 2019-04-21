'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // id
    carteira: {
        type: String,
        required: true
    },
    tipoMovi: {
        type: String,
        required: true,
        enum: ["entrada","saida"],
        default: "entrada"
    },
    categMovi: {
        type: String,
        required: true,
        enum: ["deposito","transferencia","saque","pagamento"],
        default: "deposito"
    },
    historico: {
        type: String,
        required: true
    },
    observacao: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Movi', schema);
