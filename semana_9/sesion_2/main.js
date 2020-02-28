/* Loops bucles  */
//FOR

// for (let index = 0; index < 9; index++) {
//   console.log('index', index); //incremento
// }

// for (let index = 10; index > 0; index--) {
//   console.log('index', index); //decremento
// }

/**----------- */
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers.length);

// for (let index = 0; index < numbers.length; index++) {
//   console.log(numbers[index]);
// }
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let total = 0;

// for (let index = 0; index < numbers.length; index++) {
//   total = total + numbers[index]
// }

// console.log('Total', total);

/**WHILE**/
// let numero = parseFloat(prompt('Ingresa un numero'));
// let suma = 0;
// while(numero != 0) {
//   suma = suma + numero;
//   numero = parseFloat(prompt('ingresa otro numero'));
// }

// alert(`La suma es ${suma}`);

/**DO WHILE */
// let suma = 0;
// do {
//   suma++
//   console.log('Se ejecuta aun q sea una sollla vez');

// } while (suma != 5)

/**BREAK**/

// for (let i = 0; i < 10; i++) {
//   // debugger;
//   if (i == 5) {
//     break;
//   }

//   console.log('index', i);
// }

/**CONTINUE**/
// for (let index = 0; index < 20; index++) {
//   if (index%2) //pares

//    {
//     console.log('index dentro inpar', index); //dentro inpar
//     continue;
//   }
//   console.log('index', index);

// }

/**FOR IN**/
// let user = {
//   name: 'sebastian',
//   lastname: 'yabiku',
//   age: 33
// }

// for (const key in user) {
//   console.log('key', key);
//   console.log('value',user[key]);

// } 

/**POR VALOR Y POR REFERENCIA */
//POR VALOR
let nombre = 'sebastian';
let nombre2 = nombre; //sebastian

nombre2 = 'jose luis'
console.log(nombre); //sebastian
console.log(nombre2); //jose luis

//POR REFERENCIA
let obj1 = {
  name: 'sebastian',
  lastname: 'yabiku'
};

let obj2 = Object.assign({}, obj1); //copia nueva
// let obj2 = obj1; //referencia

console.log('obj2', obj2); /*{
  name: 'sebastian',
  lastname: 'yabiku'
};*/

obj2.name = 'jose luis';
console.log('obj2', obj2);

console.log('obj1', obj1);

/**Arrow function */
function suma(a, b) {
  return a + b;  //clasico
}
console.log(suma(2, 3));


let fn1 = (a, b) => a + b; // con arrow fn
console.log(fn1(5, 8));

let fn2 = (a, b) => {
  return a + b; // varias lineas de codigo
};
console.log(fn1(8, 8));

/**CALCULADORA**/
let operacion = prompt('Ingresar operación');
debugger;

if (
  operacion == '+' ||
  operacion == '-' ||
  operacion == '*' ||
  operacion == '/'
) {
  let num1 = parseFloat(prompt('Ingresar el primer número'));
  let num2 = parseFloat(prompt('Ingresar el segundo número'));

  switch (operacion) {
    case '+':
      console.log(`la suma de los numeros ${num1} y ${num2} es ${suma(
        num1,
        num2
      )}`);
      break;
    case '-':
      console.log(`la resta de los numeros ${num1} y ${num2} es ${resta(
        num1,
        num2
      )}`);
      break;
    case '*':
      console.log(`la multiplicación de los numeros ${num1} y ${num2} es ${multiplicacion(
        num1,
        num2
      )}`);
      break;
    case '/':
      console.log(`la división de los numeros ${num1} y ${num2} es ${division(
        num1,
        num2
      )}`);
      break;
  }
} else {
  alert('No enrtenndí la operación que quieres ejecutar');
}

function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}






