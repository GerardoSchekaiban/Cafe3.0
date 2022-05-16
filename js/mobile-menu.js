document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
});

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', responsiveNav);
}

function responsiveNav() {
    const navegacion = document.querySelector('.navigation');
    navegacion.classList.toggle('display')
}