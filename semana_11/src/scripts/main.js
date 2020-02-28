document.getElementById("footer")
document.getElementsByTagName('header')
document.querySelector('li') //solo el primer elemento
document.querySelectorAll('li') //todos los elementos
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
