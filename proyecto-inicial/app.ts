// Un archivo simple de TypeScript

let nombre:string = "Peter";
let numero:number = 123;
let booleano:boolean = true;

let hoy:Date = new Date();
hoy= new Date('2018-06-18');
console.log(hoy);

let cualquiera:any;
cualquiera="fistro";
cualquiera = 123;
cualquiera = hoy;

let spiderman = {
    nombre: "Peter",
    edad: 20
}

spiderman = {
    nombre: "Peter",
    edad: 20
//    , poder:"trepar paredes" NO COMPILA, porque ya se ha declarado el objeto, sin esa propiedad
}

//TEMPLATE LITERALS con back ticks (`)
let texto = `Hola, ${spiderman.nombre} tienes ${spiderman.edad} años`;
console.log(texto);
texto = `Hola, 
${spiderman.nombre} tienes 
  ${spiderman.edad} años`;
console.log(texto);

//lo que hay dentro de ${ XXX } es codigo JS puro

// PARAMETROS OBLIGATORIOS, OPCIONALES y DEFECTO
function activar (quien:string, 
    objeto:string ="señal",
    momento?:string){

    let mensaje:string;
    if(momento){
        mensaje = `${quien} ha activado la ${objeto}en la ${momento}`;
    } else {
        mensaje = `${quien} ha activado la ${objeto}`;
    }
}

activar("fistro");
activar("fistro", "batiseñal");
activar("fistro","batiseñal", "tarde");

//objeto:string ="señal" por defecto, es opcional
//el primer parametro no puede ser opcional y no puede haber obligatorios al principio
//momento?:string es opcional


//FUNCIONES DE FLECHA
let nombre = "Pedro"
let hulk = {
    nombre: "hulk",
    smash() {
        setTimeout( ()=> console.log(this.nombre + "smash"), 1500);
    }
}
//El this no se ve afectado y sigue siendo de hulk, en vez de apuntar a window


//DESTRUCTURACION DE OBJETOS Y ARREGLOS
let avenger = {
    nameAvenger: "Steve",
    clave: "Cpt America",
    poder: "droga"
}

//se declaran variables asi
let {nameAvenger, clave, poder} = avenger;
console.log(nombre, clave, poder);

//ARREGLOS
let avengers:string[] = ["thor", "steve", "tony"];
let[thor, capi, ironman] = avengers;
console.log(ironman);


//PROMESAS
let prom1 = new Promise( function( resolve , reject){
    setTimeout(() => {
        console.log("Promesa terminada");

        //termina ok
        resolve();

        //termina ko
        //reject();
    }, 1500);
})

console.log("Paso 1")
prom1.then(
    function(){console.log("Ha ido OK")}, 
    function(){console.log("menuda mierda")}
)
console.log("Paso 2")
//Las promesas son sincronas. Se imprimirá primero Paso1 y Paso2.


//INTERFACES EN TYPESCRIPT
interface Xmen{
    nombre:string,
    poder:string
}
let wolverine:Xmen = {
    nombre: "Logan",
    poder: "Garras"
}

function enviarMision(xmen:Xmen){
    console.log("Enviando a: " + xmen.nombre);
}