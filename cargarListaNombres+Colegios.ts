import * as fs from 'fs';

function existePersona(nombre: string, arrayNombres: string[]): number {
    let resultado: number = -1;
    for (let index: number = 0; index < arrayNombres.length; index++) {
        if (arrayNombres[index].toLowerCase() == nombre.toLowerCase()) {
            resultado = index;
            break;
        }
    }
    return resultado;
}

function dondeVoto(nombre: string, nombres: string[], colegios: string[]): void {
    if (existePersona(nombre, nombres) != -1) {
        console.log(nombres[existePersona(nombre, nombres)], "vota en colegio", colegios[existePersona(nombre, nombres)]);
    }
    else console.log(nombre, ": no existe en el padrón");
}

function removeItemFromArr(arr: string[], item: string): void {
    let index: number = arr.indexOf(item);
    while (index != -1) {
        arr.splice(index, 1);
        index = arr.indexOf(item);
    }
}

let textoNombres: string = fs.readFileSync('abc.txt', 'utf8');
let textoColegios: string = fs.readFileSync('abc2.txt', 'utf8');

let nombres: string[] = textoNombres.split(' ');
nombres = nombres.map(nombres => nombres.replace('\r\n', ''));

let colegios: string[]; //= textoColegios.split('|');
colegios = textoColegios.split(' ');
// colegios = colegios.map(colegios => colegios.replace('',''));
//colegios = colegios.map(colegios => colegios.replace('|',''));
removeItemFromArr(colegios, "");
removeItemFromArr(colegios,"|");

console.log("nombres: ", nombres);
console.log("colegios: ", colegios);
dondeVoto("emanuel", nombres, colegios);
