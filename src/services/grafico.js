'use strict'

const plotly = require('plotly')("viniciuscandidocezar", "rlVZgUbFU3xgBLhPFuzQ")
const arrayPrincipal = [];

function MontarGrafico( arrayx, array ){
    arrayPrincipal = [
        {
          x: arrayx,
          y: array,
          type: "bar"
        }
    ];
}

var graphOptions = {filename: "basic-bar", fileopt: "overwrite"};
plotly.plot(arrayPrincipal, graphOptions, function(err, msg){
    console.log(msg);
});
