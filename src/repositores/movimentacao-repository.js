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
     var result = await Movi.find({},{ historico: 1, tipoMovi: 1, _id: 0 } ).sort( { dataMovi: -1 } ).limit( 10 );
     return result;
};
