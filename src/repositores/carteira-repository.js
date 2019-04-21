'use strict'

const mongoose = require("mongoose");
const Carteira = mongoose.model('Carteira');

exports.atualiza = async(id, valor, historico) => {
    await Carteira
        .update( { idCarteiraUser: id }, {
            $set: { idCarteiraUser: id },
            $push: { historico: historico },
            $inc: { valor: valor }
        }, { upsert: true } );
};

exports.getByidCarteiraUserValor = async(idUser) => {
     var result = await Carteira.findOne( { idCarteiraUser:idUser }, 'valor' );
     return result;
};

exports.getByidCarteiraUserHistorico = async(idUser) => {
     var result = await Carteira.findOne( { idCarteiraUser:idUser }, 'historico' );
     return result;
};
