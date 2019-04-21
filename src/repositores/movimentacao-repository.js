'use strict'

const mongoose = require("mongoose");
const Movi = mongoose.model("Movi");

exports.cria = async(dados) => {
     var movimentacao = new Movi(dados);
     await movimentacao.save();
};

exports.getByCategoriaTipoMov = async(tipoMovi) => {
     var result = await Produto.find({ tipoMovi: tipoMovi }, 'categoriaMovimentacao');
     return result;
};
