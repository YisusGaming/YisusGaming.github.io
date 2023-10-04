/** @type {HTMLDivElement}  */
const repos = document.querySelector('.repos');

fetch('https://api.github.com/users/YisusGaming/repos')
    .then((res) => res.json())
    .then((res) => {
        res.forEach((repo) => {
            const repoTemplate = `<div class="repo">
                <h1>
                    <a href="${repo.html_url}">${repo.name}</a>
                </h1>
                <h2>${repo.description}</h2>
                <div class="stats">
                    <h4>${repo.forks_count}</h4>
                    <h4>${repo.stargazers_count}</h4>
                    <h4>${repo.language ?? ''}</h4>
                </div>
            </div>`;

            repos.innerHTML += repoTemplate;
        });
    })
    .catch((err) => {
        console.error(err);
        repos.innerHTML = `<h1 id="error">Error while fetching projects.</h1>`;
    });
