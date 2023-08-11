/* Fading the element .scroll-down depending on scroll */
let lastScrollY = 0;

document.addEventListener('scroll', (event) => {
    if (scrollY > 10) {
        document.getElementById('scroll-down').style.opacity = "0";
    } else if (scrollY <= 10) {
        document.getElementById('scroll-down').style.opacity = "1";
    }
});