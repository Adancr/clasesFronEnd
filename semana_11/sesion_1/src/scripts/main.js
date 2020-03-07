document.getElementById("footer")
document.getElementsByTagName('header')
document.querySelector('li') //solo el primer elemento
document.querySelector('#li') //por el ID
document.querySelector('.li') //por el clase
document.querySelectorAll('li') //todos los elementos y retorna un elemento de nodos
// document.querySelectorAll('li').forEach(function(li) {console.log(li)}) //recorrer con forEach

document.querySelector('nav') //PannerNode atrapa el padre
document.querySelector('nav').parentNode

document.querySelector('nav').childNodes //atrapa hijos + espacios
document.querySelector('nav').children //solo atrapa el hijo
document.querySelector('nav ul').children //solo atrapa el hijo

document.querySelector('ul').firstElementChild //primer elemnto
document.querySelector('ul').firstChild //primer element text
document.querySelector('ul').lastElementChild //ultimo elemento

document.querySelector('ul').firstElementChild.querySelector('a') //acceder denreo del elemento

document.querySelector('ul').firstElementChild.nextElementSibling //el siguiente hermano
document.querySelector('ul').firstElementChild.previoElementSibling //el  hermano anterior

document.querySelectorAll('li')[1] //array atravez de sus indices
document.getElementsByTagName('li')[2] //coleccion html tambine pondemos coger por le indice

document.querySelector('ul').closest('body').querySelector('main') //navegar hacia cierto punto con closest

/**MANIPULAR EMELENTOS**/
//  //propiedades y metodos

let header = document.querySelector('header')

header
header.className //ver clase name
header.innerHTML //ver los elementos lo esta dentro
header.outerHTML //atrpa todo el estructora HTML 
header.innerText //va imprimir los textos q esta dentro del header
header.style //todo los stylos q puede palicar a header

// header.style.border = '2px solid red'

document.querySelectorAll('a')
document.querySelectorAll('a').forEach(function(element) {
  element.style.color = 'inherit'
})

// agregar atributos

document.querySelector('p').setAttribute('class', 'calse1 clase2')
document.querySelector('p').setAttribute('style', 'color: red') //add
// document.querySelector('p').removeAttribute('style', 'color: red') //remove
document.querySelector('p').setAttribute('id', 'id1')

document.querySelector('header').clientHeight

document.querySelector('header').dataset //me trae un objeto con el valor de names
document.querySelector('header').dataset.names 

let buttonMenu = document.querySelector('button');
let nav = document.querySelector('nav');
// console.log(buttonMenu);
buttonMenu.onclick = function() {
  nav.setAttribute("style", "dispaly:block")
}

