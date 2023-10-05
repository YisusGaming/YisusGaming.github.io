/** @type {HTMLDivElement}  */
const repos = document.querySelector('.repos');

fetch('https://api.github.com/users/YisusGaming/repos')
    .then((res) => res.json())
    .then((res) => {
        res.forEach((repo) => {
            let description = "";
            if (repo.description.charAt(repo.description.length - 1) !== '.') {
                description = repo.description += '.';
            } else {
                description = repo.description;
            }

            const repoTemplate = `<div class="repo">
                <h1 id="${repo.name}">
                    <a target="_blank" href="${repo.html_url}">${repo.name}</a>
                </h1>
                <h3>${description}</h3>
                <div class="stats">
                    <h4 id="forks">
                        <i class="fa-solid fa-code-fork"></i>
                        ${repo.forks_count}
                    </h4>
                    <h4 id="stars">
                        <i class="fa-solid fa-star"></i>
                        ${repo.stargazers_count}
                    </h4>
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
