
//criando menu hamburguer para versão mobile

const hamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu-list');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
});