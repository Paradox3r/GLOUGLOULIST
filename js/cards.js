// 1. Fabrique la carte HTML d'UN cocktail
function createCard(cocktail) {
    const card = document.createElement("article");
    card.className = "card";

    const cost = getCost(cocktail).toLocaleString("fr-FR", { style: "currency", currency: "EUR" });

    // Zone d'action : différente selon que le cocktail est testé ou non
    let actionHtml;
    if (isTested(cocktail.id)) {
        const rating = getRating(cocktail.id);
        actionHtml = `
            <p class="card-rating" aria-label="Ta note : ${rating} sur 5">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</p>
            <button type="button" class="button button--secondary" data-remove>Retirer</button>`;
    } else {
        actionHtml = `
            <select aria-label="Note pour ${cocktail.name}">
                <option value="1">1 ★</option>
                <option value="2">2 ★★</option>
                <option value="3" selected>3 ★★★</option>
                <option value="4">4 ★★★★</option>
                <option value="5">5 ★★★★★</option>
            </select>
            <button type="button" class="button" data-add>Je l'ai testé</button>`;
    }

    card.innerHTML = `
        <img class="card-photo" src="${cocktail.image}" alt="" width="800" height="450">
        <h3><a href="${cocktail.id}.html">${cocktail.name}</a></h3>
        <p>${cocktail.description}</p>
        <p class="card-meta">Coût estimé : ${cost}</p>
        <div class="card-actions">${actionHtml}</div>
    `;

    // Clic sur "Je l'ai testé" : on enregistre la note choisie
    const addButton = card.querySelector("[data-add]");
    if (addButton) {
        addButton.addEventListener("click", function () {
            const note = Number(card.querySelector("select").value);
            setRating(cocktail.id, note);
            fillContainers();
        });
    }

    // Clic sur "Retirer" : le cocktail redevient "à tester"
    const removeButton = card.querySelector("[data-remove]");
    if (removeButton) {
        removeButton.addEventListener("click", function () {
            removeRating(cocktail.id);
            fillContainers();
        });
    }

    return card;
}

// 2. Affiche une LISTE de cocktails dans un conteneur
function displayCards(container, list) {
    container.innerHTML = "";
    for (const cocktail of list) {
        container.appendChild(createCard(cocktail));
    }
}

// 3. Remplit tous les <div data-cocktail="...">
function fillContainers() {
    document.querySelectorAll("[data-cocktail]").forEach(function (container) {
        const wanted = container.dataset.cocktail;
        let list;

        if (wanted === "all") {
            list = cocktails;
        } else {
            list = wanted.split(",")
                .map(id => cocktails.find(c => c.id === id.trim()))
                .filter(Boolean);
        }

        displayCards(container, list);
    });
}

fillContainers();
