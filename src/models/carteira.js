'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id
    idCarteiraUser: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    valor: {
        type: Number,
        required: true
    },
    historico: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Carteira', schema);
