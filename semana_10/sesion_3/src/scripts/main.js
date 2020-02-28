// console.log(window.document);

// window.document.querySelector('h1') no se requiero referenciar window por es global
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('footer'));

// history.back()
// setInterval(function() {
//   window.location.reload();
// }, 3000);

// setInterval(function() { cada cierto tiempo se ejecuta
//   location.replace('https://iuslatin.pe');

// }, 6000); 

// window

// alert('hola mundo!!')
// prompt('ingresa tu nombre');
// let apellido = prompt('ingresa tu apellido');

// setTimeout(function(){
//   console.log('hola mundo!!')
// }, 3000);

// setInterval(() => console.log('Hola Interval!!'), 3000);

// let h1 =document.querySelector('h1');

// console.log('%O', h1);
// console.log(h1.innerText);

// navigator.Online
// console.log('%O', navigator)

// navigator.geolocation.getCurrentPosition(function(localizacion) {
//   console.log(localizacion);
// })

window.screen
screen.width

screen.orientation

// let nombre = prompt('ingresa tu nombre')

// alert('tu nombre es' + ' ' +nombre)

// confirm('ala darle clic estas aceptando los termino y codiciones')


// alert(
//   function(confirm=true) {
//     alert('aceptaste tu condena'),
//   }else{
//     alert('tu solicitud no fue aceptado')
//   }
// )


// event.preventDefault quita el comportamiento por defecto
document.querySelector('a').onclick = function (event) {
  event.preventDefault();
  console.log('hoal')
  
  }


  window.addEventListener('scroll', function(event) {
    console.log('hola')
  })


