
// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;

var PERSONAJE = {
  nombre: nombre,
  edad: edad
};


let nombre2:string = "Ricardo Tapia";
let edad2:number = 23;

const PERSONAJE2 : {nombre:string, edad:number} = {
  nombre: nombre,
  edad: edad
};

//-------------------------------------------------------------
// Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

interface checkBatman{
  nombre:string;
  artesMarciales:string[];
}
let batmanCheck:checkBatman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
//-------------------------------------------------------------
// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}

let resultadoDobleFlecha =  (a:number, b:number) => (a+b)*2;


//-------------------------------------------------------------
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

function getAvengerResult( nombre:string, poder?:string, arma:string="arco" ){
  let mensaje:string;
  if( poder ){
     mensaje =`${nombre} tiene el poder de: ${poder} y un arma ${arma}`;
  }else{
     mensaje = `${nombre} tiene un arma ${arma}`;
  }
};

console.log(getAvengerResult("Thor"));
console.log(getAvengerResult("Thor", "hammer"));
console.log(getAvengerResult("Thor", "hammer", "hammer"));

//-------------------------------------------------------------
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

export class Rectangulo{
  base:number;
  altura:number;
  area:string;

  constructor(base:number, altura:number){
    this.altura = altura;
    this.base = base;
  }
  
  getArea():number{
    return this.base*this.altura;
  }
  
}