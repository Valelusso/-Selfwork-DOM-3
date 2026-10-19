
const articles = [
    { id: 1, title: "Articolo 1", description: "Descrizione breve dell'articolo 1." },
    { id: 2, title: "Articolo 2", description: "Descrizione breve dell'articolo 2." },
    { id: 3, title: "Articolo 3", description: "Descrizione breve dell'articolo 3." },
    { id: 4, title: "Articolo 4", description: "Descrizione breve dell'articolo 4." },
    { id: 5, title: "Articolo 5", description: "Descrizione breve dell'articolo 5." },
    { id: 6, title: "Articolo 6", description: "Descrizione breve dell'articolo 6." },
    { id: 7, title: "Articolo 7", description: "Descrizione breve dell'articolo 7." },
    { id: 8, title: "Articolo 8", description: "Descrizione breve dell'articolo 8." },
    { id: 9, title: "Articolo 9", description: "Descrizione breve dell'articolo 9." }
];

let currentIndex = 0;
const articlesPerPage = 3;

const generaCard = document.querySelector('#generaCard');
const reset = document.querySelector('#reset');
const contenitoreArticoli = document.querySelector('#contenitoreArticoli');
const alertArticoli = document.querySelector('#alertArticoli');

generaCard.addEventListener('click', () => {
    const nextArticles = articles.slice(currentIndex, currentIndex + articlesPerPage);

    nextArticles.forEach(article => {
        const colonna = document.createElement('div');
        colonna.classList.add('col-12', 'col-md-4');

        const card = document.createElement('div');
        card.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const titolo = document.createElement('h5');
        titolo.classList.add('card-title');
        titolo.innerText = article.title;

        const descrizione = document.createElement('p');
        descrizione.classList.add('card-text');
        descrizione.innerText = article.description;

        cardBody.appendChild(titolo);
        cardBody.appendChild(descrizione);
        card.appendChild(cardBody);
        colonna.appendChild(card);
        contenitoreArticoli.appendChild(colonna);
    });

    currentIndex += nextArticles.length;

    if (currentIndex >= articles.length) {
        generaCard.classList.add('d-none');
        alertArticoli.classList.remove('d-none');
    }
});

reset.addEventListener('click', () => {
    contenitoreArticoli.innerHTML = '';
    currentIndex = 0;
    generaCard.classList.remove('d-none');
    alertArticoli.classList.add('d-none');
});
