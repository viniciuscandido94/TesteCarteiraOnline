'use strict';

const repository = require('../repositores/movimentacao-repository');
const guid = require('guid');
const grafico = require('../services/grafico.js');

exports.getByCategoriaTipoMov = async(req, res, next) => {
    try {
        var dados = await repository.getByCategoriaTipoMov(req.params.tipoMovi);
        dados = dados.sort();

        var dadosAux = [];
        var dadosQtd = [];
        var contador = 0;
        var categoriaant = "";
        for( var x = 0; x < dados.length; x++ ){
            if(categoriant && categoriant !== dados[x]){
                dadosAux.push(categoriant);
                dadosQtd.push(contador);
                contador = 0;
            }
            categoriant = dados[x];
            contador++;
        }

        grafico.MontarGrafico(dadosAux,dadosQtd);
    } catch(e){
        res.status(500).send( { message:'Processo falhou!' } );
    }
};

exports.postMovi = async(req, res, next) => {
    try {
        if(req.body.entrada){
            await repository.cria({
                categMovi: req.body.categoriaentrada,
                tipoMovi: 'entrada',
                carteira: req.body.idcarteira,
                observacao: req.body.observacao
            });
        }
        if(req.body.saida){
            await repository.cria({
                categMovi: req.body.categoriasaida,
                tipoMovi: 'saida',
                carteira: req.body.idcarteira,
                observacao: req.body.observacao
          });
        }
        res.status(201).send({ message:'Processo concluido!' });
    } catch(e){
        res.status(500).send({ message:'Processo de gravacao de movimentacao falhou!' });
    }
};
