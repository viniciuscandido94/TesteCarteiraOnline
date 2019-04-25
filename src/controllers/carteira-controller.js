'use strict';

const repository = require('../repositores/carteira-repository');
const guid = require('guid');

exports.getByidCarteiraUserValor = async(req, res, next) => {
    try {
        var idCarteira = req.body.idcarteira || req.params.idcarteira
        if(!idCarteira){
            res.render( 'validaValoresNaoDigitado', { messagem: 'Nenhuma carteira digitada, por favor refaça!' } )
        }
        var dados = await repository.getByidCarteiraUserValor( idCarteira );
        res.render( 'valorCarteira', { valor: dados.valor, carteira: idCarteira } )
    } catch(e) {
        res.status(500).send( { message:'Recuperar valor da carteira falhou!' } );
    }
};

exports.getByidCarteiraUserHistorico = async(req, res, next) => {
    try {
        var idCarteira = req.body.idcarteira || req.params.idcarteira
        if(!idCarteira){
            res.render( 'validaValoresNaoDigitado', { messagem: 'Nenhuma carteira digitada, por favor refaça!' } )
        }
        var dados = await repository.getByidCarteiraUserHistorico( idCarteira );
        res.render( 'historicoCarteira', { historico: dados.historico, carteira: idCarteira } );
    } catch(e) {
        console.log(e)
        res.status(500).send( { message:'Recuperar historico da carteira falhou!' } );
    }
};

exports.post = async(req, res, next) => {
    try {
        if(!req.body.idcarteira){
            res.render( 'validaValoresNaoDigitado', { messagem: 'Nenhuma carteira digitada, por favor refaça!' } )
        }
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
