import projects from "../data/projects.js";
import posts from "../data/posts.js";
import devProjects from "../data/devprojects.js";

/* Index Html */
const postsCotainer = document.getElementById("posts-container");
posts.map((post) => {
    post.id = post.id - (posts.length - 1);
});
posts.map((post) => {
    if (post.id < 0) {
        post.id = post.id * -1;
    }
});
window.onload = posts.forEach((post) => {
    if (postsCotainer) {
        const card = postsCotainer.children.item(post.id);
        if (card) {
            card.children.item(0).innerHTML = post.title;
            card.children.item(1).innerHTML = post.body;
        }
    }
});

const youtubeLink = document.getElementById('youtube-link');
if (youtubeLink) {
    youtubeLink.addEventListener('click', () => {
        alert('Hey! Estoy haciendo algunos cambios en mi canal de youtube. No está listo todavía, así que no puedes entrar por ahora');
    });
}

/* Blog Html */
const postList = document.getElementById("post-list");
posts.forEach((post) => {
    const template = `<div id="${post.id}" class="card"><h2 class="card-title">${post.title}</h2><p class="card-body" style="font-size:1.2rem;">${post.body}</p><br/><strong style="position: absolute; color:rgb(255, 255, 255, .5);">${post.date}</strong></div>`;
    if (postList) { postList.innerHTML = template + postList.innerHTML; }
});

/* Projects Info Html */
const projectList = document.getElementById("project-list");
projects.forEach((project) => {
    const template = `<div class="card bg-30"><h2 class="card-title">${project.title}</h2><div style="display: flex; justify-content: center; aling-items: center;"><img class="project-img" src="${project.img.src}" alt="${project.img.alt}" style="max-height: 720px; max-width: 800px;"></div><p class="card-body" style="font-size:1.5rem">${project.desc}</p></div>`;
    if (projectList) { projectList.innerHTML = template + projectList.innerHTML; }
});

/* Dev Projects */
const devProjectList = document.getElementById("dev-project-list");
devProjects.forEach((project) => {
    const template = `<div class="card bg-30"><h2 class="card-title">${project.title}</h2><div style="display: flex; justify-content: center; aling-items: center;"><img class="project-img" src="${project.img.src}" alt="${project.img.alt}" style="max-height: 720px; max-width: 800px;"></div><p class="card-body" style="font-size:1.5rem">${project.desc}</p></div>`;
    if (devProjectList) { devProjectList.innerHTML = template + devProjectList.innerHTML; }
});

/* Navbar */
const navbarButton = document.getElementById('show-hide-navbar');
if (navbarButton) {
    navbarButton.addEventListener('click', (event) => {   
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('show-navbar');
        }
    });
}