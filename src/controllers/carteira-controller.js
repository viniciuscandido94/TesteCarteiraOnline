'use strict';

const repository = require('../repositores/carteira-repository');
const guid = require('guid');

exports.getByidCarteiraUserValor = async(req, res, next) => {
    try {
        var dados = await repository.getByidCarteiraUserValor( req.params.idCarteiraUser );
        res.render( 'valorCarteira', { valor: dados.valor, carteira: req.params.idCarteiraUser } )
    } catch(e) {
        res.status(500).send( { message:'Recuperar valor da carteira falhou!' } );
    }
};

exports.getByidCarteiraUserHistorico = async(req, res, next) => {
    try {
        var dados = await repository.getByidCarteiraUserHistorico( req.params.idCarteiraUser );
        res.render( 'historicoCarteira', { historico: dados.historico, carteira: req.params.idCarteiraUser } );
    } catch(e) {
        res.status(500).send( { message:'Recuperar historico da carteira falhou!' } );
    }
};

exports.post = async(req, res, next) => {
    try {
        if (req.body.entrada){
            await repository.atualiza( req.body.idcarteira, req.body.entrada, "Foi efetuada uma transacao de entrada no valor " + req.body.entrada);
        }
        if (req.body.saida){
            var valorDiminuir = ( req.body.saida * -1 );
            await repository.atualiza( req.body.idcarteira, valorDiminuir, "Foi efetuada uma transacao de saida no valor " + req.body.saida);
        }
        next();
    } catch(e){
        res.status(500).send({ message:'Processo falhou!' });
    }
};
