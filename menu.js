var btnExp = document.querySelector('#btnExpand')
var menuSide = document.querySelector('.menuLat')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})