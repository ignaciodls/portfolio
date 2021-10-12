// Elements

let menuButton = document.querySelector('.nav__menu-icon')
let menu = document.querySelector('.menu')


//Events

menuButton.addEventListener('click', function(){
    menu.classList.toggle('opened-menu')
})

menu.addEventListener('click', function(){
    menu.classList.remove('opened-menu')
})