'use strict'

//const plotly = require('plotly')("viniciuscandidocezar", "rlVZgUbFU3xgBLhPFuzQ")

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

    exibeGrafico(dadosAux,dadosQtd);
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

    exibeGrafico(dadosAux,dadosQtd);
};

function exibeGrafico(arrayx, array){

    // var arrayPrincipal = [];
    //
    // arrayPrincipal = [
    //     {
    //       x: arrayx,
    //       y: array,
    //       type: "bar"
    //     }
    // ];
    //
    // var graphOptions = {filename: "basic-bar", fileopt: "overwrite"};
    // plotly.plot(arrayPrincipal, graphOptions, function(err, msg){
    //   // console.log(msg);
    // });

    var data = [arrayx, array];

    var layout = {
        title: 'Connect the Gaps Between Data',
        showlegend: false
    };

    Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});
}
