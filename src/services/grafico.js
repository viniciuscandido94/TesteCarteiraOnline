'use strict'

exports.montaGraficoCategorias = function(dados){
    var dadosAux = [];
    var dadosQtd = [];
    var contador = 0;
    var categoriant = "";

    for( var x in dados ){
        if(categoriant && categoriant !== dados[x]["categMovi"]){
            dadosAux.push(categoriant);
            dadosQtd.push(contador);
            contador = 0;
        }

        categoriant = dados[x]["categMovi"];
        contador++;
    }

    dadosAux.push(categoriant);
    dadosQtd.push(contador);

    return { dadosAux, dadosQtd }
};

exports.montaGraficosUltimosMovi = function(dados){
    var content = 0;
    var contsai = 0;
    var dadosAux = [];
    var dadosQtd = [];
    var dadosHistorico = [];

    for( var y in dados ){
        if( dados[y]["tipoMovi"] === "entrada" ){
            content++
        } else if( dados[y]["tipoMovi"] === "saida" ){
            contsai++
        }
        dadosHistorico.push(dados[y]["historico"]);
    };

    dadosAux.push("entrada");
    dadosQtd.push(content);
    dadosAux.push("saida");
    dadosQtd.push(contsai);

    return dadosHistorico
    //return { dadosAux,dadosQtd }
};
