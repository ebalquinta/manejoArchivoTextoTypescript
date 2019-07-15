"use strict";
exports.__esModule = true;
var fs = require("fs");
function existePersona(nombre, arrayNombres) {
    var resultado = -1;
    for (var index = 0; index < arrayNombres.length; index++) {
        if (arrayNombres[index].toLowerCase() == nombre.toLowerCase()) {
            resultado = index;
            break;
        }
    }
    return resultado;
}
function dondeVoto(nombre, nombres, colegios) {
    if (existePersona(nombre, nombres) != -1) {
        console.log(nombres[existePersona(nombre, nombres)], "vota en colegio", colegios[existePersona(nombre, nombres)]);
    }
    else
        console.log(nombre, ": no existe en el padrón");
}
function removeItemFromArr(arr, item) {
    var index = arr.indexOf(item);
    while (index != -1) {
        arr.splice(index, 1);
        index = arr.indexOf(item);
    }
}
var textoNombres = fs.readFileSync('abc.txt', 'utf8');
var textoColegios = fs.readFileSync('abc2.txt', 'utf8');
var nombres = textoNombres.split(' ');
nombres = nombres.map(function (nombres) { return nombres.replace('\r\n', ''); });
var colegios; //= textoColegios.split('|');
colegios = textoColegios.split(' ');
// colegios = colegios.map(colegios => colegios.replace('',''));
//colegios = colegios.map(colegios => colegios.replace('|',''));
removeItemFromArr(colegios, "");
removeItemFromArr(colegios, "|");
console.log("nombres: ", nombres);
console.log("colegios: ", colegios);
dondeVoto("emanuel", nombres, colegios);
