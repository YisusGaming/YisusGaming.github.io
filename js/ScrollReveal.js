const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.forEach((_class) => {
                if (_class == 'hidden-left') {
                    entry.target.classList.add('show-left');
                } else if (_class == 'hidden-right') {
                    entry.target.classList.add('show-right');
                } else if (_class == 'hidden-up') {
                    entry.target.classList.add('show-up');
                } else if (_class = 'hidden-down') {
                    entry.target.classList.add('show-down');
                }
            });
        } else {
            entry.target.classList.remove('show-left');
            entry.target.classList.remove('show-right');
            entry.target.classList.remove('show-up');
            entry.target.classList.remove('show-down');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));