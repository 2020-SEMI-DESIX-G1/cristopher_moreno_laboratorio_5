/**
 * Laboratorio #5 - Problemas básicos con Javascript
 * @autor Cristopher Nazaret Moreno Palmer <cristopher.moreno@gmail.com>
 */

/*
Enunciado 1:
   Declarar dos variables con la palabra reservada "var"
   imprimir el resultado de las operaciones de
   "Suma", "Resta", "Multiplicación" y "División" en la consola.
   Las variables pueden ser estáticas
*/

var ingresos = 25
var misc = 12

console.log("Suma: ", ingresos + misc)
console.log("Resta: ", ingresos - misc)
console.log("Multiplicacion: ", ingresos * misc)
console.log("Division: ", ingresos / misc)

/*
Enunciado 2:
   Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.
*/

let nombre = 'Cristopher'
let apellido = ' Moreno'

console.log("Concatenacion: ", nombre + apellido)

/*
Enunciado 3:
   Declarar dos variables con la palabra reservada "const",
   imprimir cuál es el tipo de dato de esa variable.
*/

const auto = 'Subaru_WRX_STI_2014'
const top_speed = 257

console.log("type_of: 'auto' ->", typeof (auto))
console.log("type_of: 'top_speed' ->", typeof (top_speed))

/*
Enunciado 4:
   Declarar una variable tipo Object,
   colocar 4 llaves dentro de él que contengan:
       un entero,
       un string, 
       un booleano y
       un objeto vacío, 
   en ese mismo orden.
*/

let mitsubishi = {
    year: 2016,
    model: 'mirage',
    has_cvt: true,
    engine_specs: {},
}

// console.log(mitsubishi.year)
// console.log(mitsubishi.model)
// console.log(mitsubishi.has_cvt)
// console.log(mitsubishi.engine_specs)
