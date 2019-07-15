import * as fs from 'fs';

function leerArchivo(rutaArchivo: string): string[] {
    let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');

    let lineas: string[] = archivo.split('\n');
    lineas = lineas.map(linea => linea.replace('\r', ''));

    return lineas;
}

function inicializarMatriz(arr: string[]): string[][] {
    let matriz: string[][] = new Array(arr.length);
    let maxCol: number = arr[0].split(",").length;
    for (let i: number = 0; i < arr.length; i++) {
        matriz[i] = new Array(maxCol);
    }
    return matriz;
}

function cargarMatriz(arrText: string[]): string[][] {
    let matrix: string[][] = inicializarMatriz(arrText);
    for (let indiceFila: number = 0; indiceFila < arrText.length; indiceFila++) {
        let fila: string[] = arrText[indiceFila].split(",");
        for (let indiceColumna: number = 0; indiceColumna < arrText[indiceFila].split(",").length; indiceColumna++) {
            matrix[indiceFila][indiceColumna] = fila[indiceColumna];
        }
    }
    return matrix;
}

let arr: string[] = leerArchivo('./info_autos.txt');
let matrix: string[][] = cargarMatriz(arr);

console.log("arreglo:", arr);
console.log("matriz:", matrix);