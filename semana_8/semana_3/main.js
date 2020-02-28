// let nombre = 'sebastian';
// let edad = '33';
// let sexo = 'm';
// const PI = 3.14;
// let NOMBRE = 'hector';
// debugger;
// console.log(nombre, edad, sexo, PI, NOMBRE);

// function foo () {
//   debugger;
//   let name = "sebastian"; //sebastian
//   console.log(name);
//   if (true) {
//     let name = "luis";
//     console.log(name); //luis
//   };
//   console.log(name); //sebastian
// }

// //ELEVACIÓN
// let dog = "rocky";
// function getDog () {
//   debugger;
//   alert(dog) //cannot acces 'dog' before initialization
//   let dog = "aronis";
// }

// getDog (); // cannot acces 'dog' before initilization

/***VARIABLE SCOPE O ALCANCE *** */
// let nombre = 'sebastian';
// let apellido = 'yabiku';

// console.log("scope global", nombre);


// function fn() {
//   debugger;
//   let nombre = 'jose luis';
//   console.log("scope local", nombre);

//   function fninside() {
//     let nombre_inside = 'melisa';
//     console.log("dentro de otro", nombre_inside);
    
//   }

//   fninside ();
// }

// fn();

/***IMPRIMIR DATOS EN CONSOLE */ 
// let nombre = 'sebastian';
// console.log("valor de nombre", nombre);
// console.warn("warning!!");
// console.error("error!!");

/**TIPO DE DATOS**/
let user = 'sebastian';
let age = 33;
let isMan = true;
let account = null;
let married;
let password = Symbol (123456);
let obj = {
  name: "sebastian",
  lastname: "yabiku"
};

console.log("user", typeof user);
console.log("age", typeof age);
console.log("isMan", typeof isMan);
console.log("account", typeof account);
console.log("married", typeof married);
console.log("password", typeof password);
console.log("obg", typeof obj);

/**TIPO DE DATO CAMBIAR */
console.log(typeof "99.99", typeof parseInt("99.99"));
console.log("99.99", parseInt("99.99"));

/**STRING A NUMBER */
let num = 14;
console.log( typeof num.toString());

/**FUNCION SUMAR */
function sumar (a,b) {
  return a + b
}

console.log(sumar(8 ,5));

/**ARGUMENTS */
function suma(){
  console.log(arguments);
  
}
suma(1, 2, 3, 4);

/***PARAMENTRO REST */
function suma(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);  
  
}
 suma(1, 2, 3, 4);

 /**Asignacion - resta**/
 let nombre = 'sebastian';

 let num1 = 10;
 let num2 = 20;
 
 console.log(num1 + num2);
 console.log(num1 - num2);
 console.log(num1 * num2);
 console.log(num1 / num2);

/**Pedir datos al usuario */
let numero1 = prompt("hola ingresa un numero" );
let numero2 = prompt("hola ingresa otro numero");
let op = prompt("Elige una operacion +, -, x, /")

function sumar(a, b){
  return parseInt(a) + parseInt(b);
}
console.log(sumar(numero1, numero2));




 


