// function hola() {
//   console.log('Hola mundo');
  
// }

// function key() {
//   console.log('Hola mundo');
  
// }

/**normal */
// let button = document.querySelector('button')

// button.onclick = function() {
//   console.log('Hola mundo', this);
  
// }

/**addEventListener */ //se puede añadir variso eventos

// let button = document.querySelector('button');

// button.addEventListener('click', function() {
//   console.log('evento uno!!');
  
// }) directos si referencia
//  function handlerClick() {
//    console.log('Click evento uno!!');
   
//  }

//  button.addEventListener('click', handlerClick);

//  setTimeout(function() {
//    console.log('Se quito el evento!!');
//    button.removeEventListener('click', handlerClick);
   
//  }, 5000)

// -----------

// let buttons = document.querySelectorAll('button');

//  buttons.forEach(function(button) {
//    button.addEventListener('click', function() {
//      console.log('hola', this.textContent);
     
//    })
//  })

// OBJET EVENT
// let button = document.querySelector('button');
// button.addEventListener('click', function(event) {
//   console.log('event', event.type);
  
// })
// let button = document.querySelector('button');
// button.addEventListener('mouseenter', function(event) {
//   console.log('event', event.type);
  
// })

// button.addEventListener('mouseout', function(event) {
//   console.log('event', event.type);
  
// })

// Target
// let button = document.querySelector('button');

// button.addEventListener('click', function(event) {
//   console.log('event', event.target);
  
// })

/**BURBUJEO */

// const form = document.querySelector('form');
// const div = document.querySelector('div');
// const p = document.querySelector('p');

// form.addEventListener('click', function() {
//   alert('Form')
// }) //true inicio ejcutar del padre

// div.addEventListener('click', function() {
//   alert('Div')
// }) //por defecto es falso

// p.addEventListener('click', function() {
//   // event.stopPropagation();
//   alert('P')
// })

/**delegacion */
// const tds = document.querySelectorAll('td');

// // tds.forEach(function(td) {
// //   td.addEventListener('click', function(){
// //     console.log('click sobre td', this)
// //   })
// // })

// const table = document.querySelector('table');

// table.addEventListener('click', function(event) {
//   if (event.target.tagName === 'TD') {
//     console.log('Click en TD!!');
    
//   }
// })

/**FORM */
let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault() //desactiva el comportamiento por defecto
  console.log('Enviar!!');
  
})