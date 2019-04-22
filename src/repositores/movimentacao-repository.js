'use strict'

const mongoose = require("mongoose");
const Movi = mongoose.model("Movi");

exports.cria = async(dados) => {
     var movimentacao = new Movi(dados);
     await movimentacao.save();
};

exports.getByCategoriaTipoMov = async(tipoMovi) => {
     var result = await Movi.find({ tipoMovi: tipoMovi },{ categMovi: 1, _id: 0 } ).sort( { categMovi: 1 } );
     return result;
};

exports.getByUltimosMov = async() => {
     var result = await Movi.find({},{ dataMovi: 0, _id: 0 } ).limit( 10 );
     return result;
};
