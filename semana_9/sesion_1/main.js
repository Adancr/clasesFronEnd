/*IF ELSE */
// let edad = prompt('Ingresa tu edad');
// debugger;

// if (edad  >= 18) {
//   alert("tu eres mayor de 18, adelante");
// } else {
//   alert('tu no eres mayor de 18, no puedes ingresar');
// }

// if (edad  >= 18) {
//   alert("tu eres mayor de 18, adelante");
// } else if (edad > 4 && edad < 10) {
//   alert('tu edad esta entre 4 y 10');
// } else {
//   alert('Tu edad no esta nuestro rango')
// }

/*switch*/
// let fruta = prompt('Ingresa la Fruta que deseas');
// debugger;

//  switch(fruta) {
//    case 'uva' :
//      console.log('El usuario elgio la fruta uva');
//      break; /* salir del flujo si cumple condicion */
//    case 'fresa' :
//      console.log('El usuario elgio la fruta fresa');
//      break;
//    case 'platano' :
//      console.log('El usuario elgio la fruta platano');
//      break;

//      default:
//        console.log('no contamos con la fruta');

//  }
/*********OPERADOR CONDICIONAL TERNARIO************ */
// let sexo = prompt('Ingresa tu sexo');

// debugger;

// (sexo == "f") ? console.log('Eres mujer!!'): console.log('Eres hombre!!');

/****Contro de flujo throw, try , catch************* */

// function suma(a, b) {

//     if (arguments.length > 2) {
//         throw new Error('La funcion no soporta made 2 argumentos');
//         console.log(arguments);

//     }
//     return a + b;
// }

//  console.log(suma(2,3,4,5));




// console.log(suma(2, 7));  //este soporta solo 2 argumnetos

/***try catch */

/***control flujo * */
// function setName(name) {

//     let message = "";
//     try {
//         if (name.lenght < 6) {
//             throw 'SHORT'
//         } else if (name.lenght > 10) {
//             throw 'LONG'
//         }

//         message = `El nombre es correcto y es ${name}`;
//     } catch (error) {
//         if (error == 'SHORT') {
//             message = `El nombre  ${name} es demasiado corto`;
//         } else if (error == 'LONG') {
//             message = `El nombre ${name} es demasiado largo`;
//         } 
//     } finally {
//         console.log("El mensaje es", message);
//     }
// }
// debugger;
// setName("alexander");
// setName("adan");

/**ARRAY**/
// let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let nombres = ['andres', 'abel', 'juan', 'cristina'];
// let nombreYnumeros = [
//     1,
//     2,
//     'luis',
//     3,
//     'cristina',
//     true,
//     Symbol(123),
//     {name: 'sebastian'},
//     [123, 456]
// ];

// console.log(numbers);
// console.log(numbers [0], numbers[5]);
// console.log(numbers.length);
// console.log(nombreYnumeros[nombreYnumeros.length -1]); //ultimo valor del array
// console.log(nombreYnumeros[nombreYnumeros.length -1][1]); //dentro de array => array
/**modificar un valor de array */
// console.log(numbers);
// numbers [0] = 20;
// console.log(numbers);
/** OBJETOS**/
// let user = {
//     name: 'adan',
//     age: 26,
//     sexo: 'm',
//     hubbies: ['bicicleta', 'carrera', 'natacion']

// }

// //console.log(user); //imprimo objeto
// console.log(user.name); //acceder al valor del objeto
// console.log(user.age); //acceder al valor del objeto
// console.log(user.sexo); //acceder al valor del objeto
// console.log(user.hubbies); //acceder al valor del objeto
// console.log(user.hubbies[0]); //acceder al valor del objeto + indice

// 2da asociando con ingreso de datos
// let clave = prompt('Ingresar la clave');

// let user = {
//     name: 'adan',
//     age: 26,
//     sexo: 'm',
//     hubbies: ['bicicleta', 'carrera', 'natacion']

// }

// console.log(user[clave]);

/* OBJETO - THIS */

// let user = {
//     name: 'adan',
//     age: 26,
//     sexo: 'm',
//     hubbies: ['bicicleta', 'carrera', 'natacion'],
//     getInfo: function() {
//         console.log(this); //metodo hace referencia donde forma parte del objeto

//     }

// }
// user.getInfo();

// let user = {
//     name: 'adan',
//     age: 26,
//     sexo: 'm',
//     hobbies: ['bicicleta', 'correr', 'natacion'],
//     getInfo: function() {
//         return `El nombre es ${this.name} y su edad es ${this.age} sexo es ${this.sexo} sus hubbies son ${this.hobbies[1]}`
//     },

//     setHobbies(hobbies) {
//         this.hobbies = hobbies;
//     }

// };

// user.setHobbies(['voley', 'hockey', 'beisbol'])
// console.log(user.getInfo());

/* OTRO ARRAYS */
let arrayUsers = [
  {
    name: 'sebatian',
    lastname: 'yabiku',
    age: 33
  },
  {
    name: 'sebast',
    lastname: 'lopez',
    age: '25'
  },
  {
    name: 'karin',
    lastname: 'bustillos',
    age: 32
  }
]

console.log(arrayUsers[0].name);
console.log(arrayUsers[0].lastname);
console.log(arrayUsers[0].age);




