/* Globals */
const githubURL = "https://github.com/YisusGaming";
const youtubeURL = "https://www.youtube.com/@yisuscoding";

/* Fading the element .scroll-down depending on scroll */
document.addEventListener('scroll', (event) => {
    if (scrollY > 10) {
        document.getElementById('scroll-down').style.opacity = "0";
    } else if (scrollY <= 10) {
        document.getElementById('scroll-down').style.opacity = "1";
    }
});

/* Configuring navbar depending on scroll */
document.addEventListener('scroll', (event) => {
    if (scrollY >= 125) {
        document.querySelector('.navbar').classList.add('navbar-floating');
    } else if (scrollY < 125) {
        document.querySelector('.navbar').classList.remove('navbar-floating');
    }
});

/* Opening respective links for content cards */
document.getElementById('go-github').addEventListener('click', (event) => {
    open(githubURL, "_blank");
});

document.getElementById('go-youtube').addEventListener('click', (event) => {
    open(youtubeURL, "_blank");
});
