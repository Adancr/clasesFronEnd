// const h1 = document.querySelector('h1');


// // un elemenot h1
// // h1.addEventListener('click', function() {
// h1.addEventListener('mousemove', function() {
//   // console.log(this);
//   // this.style.color = 'red'
//   this.style.color = `
//   rgb(
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)}
//   )
//   `;

//   // this.style.text-decoration es una palabra compuesta se tiene usar camelCase
//    this.style.textDecoration='underline'

// });
// // h1.addEventListener('click', function() {
// document.body.addEventListener('mousemove', function() {
//   // console.log(this);
//   // this.style.color = 'red'
//   this.style.height = '100vh'
//   this.style.backgroundColor = `
//   rgb(
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)}
//   )
//   `;

//   // this.style.text-decoration es una palabra compuesta se tiene usar camelCase
//    this.style.textDecoration == 'underline' ? 'none' : 'underline'

// });

// h1.style.background = 'orange';

/********* */
/****Classlist */
let h2 = document.querySelector('h2');

// h2.classList.add('clase'); //agrega clase
// h2.classList.remove('clase'); //remove clase
// h2.classList.item('h2'); //devuelv el valor de la clase por su indice de la coleccion
// h2.classList.toggle('is-active'); //agrega clase si no existe, elimina si existe
// h2.classList.contains('clase'); // comprueba si la clase indicada exsite.
// h2.classList.replace('oldClass', 'newClass'); // reemplaza clase

// document.body.addEventListener('click',
// function(event)) {
//   if (event.target.tagName == 'BUTTON') {
//     console.log(('cLICK')
    
//   }
// }

document.body.addEventListener('click', 
  function (event) {
    if (event.target.tagName == 'BUTTON')
  // console.log('click12');
  console.log('click12', event.target.this); //trae mas el elemento
      
})