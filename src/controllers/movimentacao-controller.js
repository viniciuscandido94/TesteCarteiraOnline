'use strict';

const repository = require('../repositores/movimentacao-repository');
const guid = require('guid');
const Graficos = require('../services/grafico.js');

exports.getByCategoriaTipoMov = async(req, res, next) => {
    try {
        var dados = await repository.getByCategoriaTipoMov(req.params.tipoMovi);
        var objDados = Graficos.montaGraficoCategorias(dados);
        return res.status(200).send( objDados );
    } catch(e){
        res.status(500).send( { message:'Processo falhou!' } );
    }
};

exports.getByUltimosMov = async(req, res, next) => {
    try {
        var dados = await repository.getByUltimosMov();
        var historicos = Graficos.montaGraficosUltimosMovi(dados);
        res.render( 'consultaUltimasMovi', { historico: historicos } );
        //return res.status(200).send( objDados );
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
                observacao: req.body.observacao,
                historico: "Foi efetuada uma transacao de entrada no valor " + req.body.entrada + " na carteira " + req.body.idcarteira
            });
        }
        if(req.body.saida){
            await repository.cria({
                categMovi: req.body.categoriasaida,
                tipoMovi: 'saida',
                carteira: req.body.idcarteira,
                observacao: req.body.observacao,
                historico: "Foi efetuada uma transacao de saida no valor " + req.body.saida + " na carteira " + req.body.idcarteira
          });
        }
        if(!req.body.saida && !req.body.entrada){
            res.render( 'validaValoresNaoDigitado', { messagem: 'Nao foi efetuado a gravação dos dados! Devido à nenhum valor de entrada e de saida terem sido informados. Por favor refaça!' } )
        }
        res.redirect('/');
    } catch(e){
        res.render()
        res.status(500).send({ message:'Processo de gravacao de movimentacao falhou!' });
    }
};
