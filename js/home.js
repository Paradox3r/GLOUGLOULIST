// Home. js prend les cocktails de data.js et les affiche sur la page
const list = document.getElementById("cocktail-list");

for (const cocktail of cocktails.slice(0, 3)) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
        <div class="card-image" aria-hidden="true">${cocktail.emoji}</div>
        <h3>${cocktail.name}</h3>
        <p>${cocktail.description}</p>
        <a class="button" href="cocktail.html?id=${cocktail.id}">Voir la recette</a>
    `;
    list.appendChild(card);
}
