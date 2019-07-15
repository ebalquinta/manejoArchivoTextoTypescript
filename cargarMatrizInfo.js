"use strict";
exports.__esModule = true;
var fs = require("fs");
function leerArchivo(rutaArchivo) {
    var archivo = fs.readFileSync(rutaArchivo, 'utf8');
    var lineas = archivo.split('\n');
    lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
    return lineas;
}
function inicializarMatriz(arr) {
    var matriz = new Array(arr.length);
    var maxCol = arr[0].split(",").length;
    for (var i = 0; i < arr.length; i++) {
        matriz[i] = new Array(maxCol);
    }
    return matriz;
}
function cargarMatriz(arrText) {
    var matrix = inicializarMatriz(arrText);
    for (var indiceFila = 0; indiceFila < arrText.length; indiceFila++) {
        var fila = arrText[indiceFila].split(",");
        for (var indiceColumna = 0; indiceColumna < arrText[indiceFila].split(",").length; indiceColumna++) {
            matrix[indiceFila][indiceColumna] = fila[indiceColumna];
        }
    }
    return matrix;
}
var arr = leerArchivo('./info_autos.txt');
var matrix = cargarMatriz(arr);
console.log("arreglo:", arr);
console.log("matriz:", matrix);
