'use strict'

const plotly = require('plotly')("viniciuscandidocezar", "rlVZgUbFU3xgBLhPFuzQ")

exports.montaGrafico = function(dados){
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

function exibeGrafico(arrayx, array){

    var arrayPrincipal = [];

    arrayPrincipal = [
        {
          x: arrayx,
          y: array,
          type: "bar"
        }
    ];

    var graphOptions = {filename: "basic-bar", fileopt: "overwrite"};
    plotly.plot(arrayPrincipal, graphOptions, function(err, msg){
      // console.log(msg);
    });
}
