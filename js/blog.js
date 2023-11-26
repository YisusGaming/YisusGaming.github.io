/** @type {HTMLDivElement}  */
const posts = document.querySelector('.posts');

// Yes. I'm hard coding an URL that probably should be private.
//
// btw, thanks to render.com for their free deploy!!
const FETCH_URL = "https://blog-backend-service-ubm1.onrender.com/posts";

posts.innerHTML = `<h1 id="loading-posts">Cargando publicaciones...</h1>`;
fetch(FETCH_URL)
    .then((res) => res.json())
    .then((res) => {
        console.log(res); // TODO: Display posts
    })
    .catch((err) => {
        console.error(err);
        posts.innerHTML = `<h1 id="error">Error al cargar las publicaciones.</h1>`;
    });
