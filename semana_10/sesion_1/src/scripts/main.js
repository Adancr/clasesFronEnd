// function sumar(a, b) {
//   return a + b;
// }  //clasico

// console.log(sumar(5, 8));

/***Arrow function */
// let sumar2 = (a, b) => a + b; //una sola linea

// console.log(sumar2(45, 50));


// let sumar3 = (a, b) => {
//   console.log('Hola mundo'); //varial lineas
//   return a + b;

// }
// console.log(sumar3(45, 50));

/* this arrow*/
// let obj = {
//   name: 'sebastian',
//   lastname: 'yabiku',
//   fn: () => {
//     console.log(this); //arrow function no apunta a su propio this sino a su padre
//   }
// }
// obj.fn();

/*Parametro por defecto*/
// function suma(a = 5, b = 5, fn = () => { }) {
//   fn();
//   return a + b;
// }
// console.log(suma(2, 3, function () {
//   console.log('hola mundo!!');

// }));

/*Paramento REST*/
// function restParam(a, b, ...rest) {
//   console.log(a);
//   console.log(b);
//   console.log(rest);
// }
// console.log(restParam(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/*Paramento SPREAD OPERATOR*/
// function restParam(a, b, ...rest) {
//   console.log(a);
//   console.log(b);
//   console.log(...rest);
// }
// console.log(restParam(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// let array = [0, 1, 2, 3, 4,];
// let array2 = [5, 6, 7, 8, 9, 10];
// let array_total = [...array, ...array2]

// console.log(array_total);

// let obj = {
//   name: 'sebastian'
// }

// let obj2 = {
//   age: 33
// }

// let obj3 = {
//   ...obj,
//   ...obj2
// }

// console.log(obj3);

/*DIFINICION CORTA DE OBJETOS*/
// let nombre = prompt('Escribe tu nombre')
// let apellido = prompt('Escribe tu apellido')

// let usuario = {
//   nombre, //nombre,
//   apellido //apellido
// }

// console.log(usuario);

/*METODO CONCISO*/
// let objc = {
//   name: 'sebastian',
//   metodo () { //: function 
//     return `Mi nombre es ${this.name}`
//   }
// }

// console.log(objc.metodo());

/**objet Object.assing()**/
// let obj = {
//   name: 'sebastian',
//   lastname: 'yabiku'
// }

// let obj2 = {
//   age: 33,
//   lastname: 'sifuentes' //sobrescribe el ultimo obj
// }

// let copyObject = Object.assign({},obj, obj2); //sin {} copia por referencia

// obj.name = 'luis'

// console.log(copyObject);

/**Destructuring obj**/
// let obj = {
//   name: 'sebastian',
//   lastname: 'yabiku'
// }

// let { name, lastname } = obj; //no hace referencia
// console.log(obj);

// let users = {
//   tipo: 'alumnos',
//   colegio: 'san miguel',
//   alumnos: {
//     uno: {
//       name: 'sebastian',
//       lastname: 'yabiku'
//     },
//     dos: {
//       name: 'erika',
//     lastname: 'rueda'
//     }
//   },
// }

//users.alumnos.uno.name;  clasico ref
// let { //defieniedo variables del objeto
//   alumnos: {
//     uno: {name, lastname}
//     // dos
//   }
// } = users;

// console.log(name, lastname);
// console.log(dos);

/**Destructuring ARRAY**/
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let [cero, uno, , tres] = numbers;

// console.log(cero, uno, tres);

// let array1 = [0, [6, 7, 8, 9, 10]];
// let [, [numbers, two]] = array1;
// console.log(numbers, two);
//  new 
// let colegio = {
//   nombre: 'san migual',
//   alumnos: [
//     {
//       name: 'sebastian',
//       age: 33,
//       sex: 'm'
//     },
//     {
//       name: 'luis',
//       age: 33,
//       sex: 'm'
//     },
//     {
//       name: 'melissa',
//       age: 33,
//       sex: 'f'
//     }
//   ]
// }

// let {alumnos} = colegio;
// console.log('alumnos', alumnos[0]);

// new 
// function alumno(nombre, apellido, edad, sexo) {
//   let nombre = nombre;
//   let apellido = apellido;
//   let edad = edad;
//   let sexo = sexo;
  
// }

// alumno('sebastiab', 'yabiku', '33', 'm');

// restructura
function alumno({name, edad, sexo, apellido}) {
  let name1 = name;
  let sexo1 = sexo;
  let edad1 = edad;
  let apellido1 = apellido

  console.log(name1);
  console.log(sexo1);
  console.log(edad1);
  console.log(apellido1);
  
}

alumno({
  name: 'sebastian',
  sexo: 'm',
  edad: '33',
  apellido: 'yabiku'
});

/**Classes**/
class Persona {
  constructor({nombre, edad}) {
    this.nombre = nombre;
    this.edad = edad
  }

  hablar() {
    return `Hola soy ${this.nombre} y mmi edad es ${this.edad}`
  }
}

let sebastian = new Persona({
nombre: 'sebastian',
edad: 33
})

let jose = new Persona({
nombre: 'jose',
edad: 95
})
console.log(sebastian);
console.log(jose);

console.log(sebastian.hablar());
console.log(jose.hablar());

// import y export

import hola, {PI, sumar} from './functions'; //as se puede renombrar PI as PE
console.log(sumar(2,1200));
console.log(hola(10,8));












