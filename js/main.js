// Variables Globales

/* EVENT LISTENERS */

document.querySelector('.menu-btn').addEventListener('click', (event) => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

document.getElementById('nav-go-back').addEventListener('click', (event) => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

const strongLinks = document.querySelectorAll('.strong-link');

strongLinks.forEach((links) => {
    links.addEventListener('click', (event) => {
        window.open(links.dataset.link, '_self');
    });
});

// Código

function ShowcaseMsg() {
    alert('Ya estás viendo el proyecto! Explora usando la barra de navegación o haciendo click en enlaces!');
}

/* SCROLL REVEAL */
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.project-cards', { delay: 500 });