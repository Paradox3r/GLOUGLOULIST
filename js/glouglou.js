// Ce script est utilisé par "À tester" et "Classement".
// Il fabrique les cartes, enregistre les notes, trie la liste
// et permet de retirer un cocktail de la Glougloulist.
// (Code écrit avec l'aide d'une IA : voir l'historique des prompts.)

const list = document.getElementById("card-grid");
const sortSelect = document.getElementById("sort");

// "to-test" ou "tested" : écrit dans le HTML de chaque page (data-mode)
const mode = list.dataset.mode;

// 1. LES NOTES, enregistrées dans le navigateur (localStorage).
// Elles ont cette forme : { "mojito": 4, "negroni": 5 }
// try/catch : si le navigateur bloque le stockage ou si les données sont
// abîmées, le site continue de marcher (sans mémoriser les notes).
function getRatings() {
    try {
        return JSON.parse(localStorage.getItem("glouglou-ratings")) || {};
    } catch (error) {
        return {};
    }
}

function saveRatings(ratings) {
    try {
        localStorage.setItem("glouglou-ratings", JSON.stringify(ratings));
    } catch (error) {
        console.error("Impossible d'enregistrer les notes :", error);
    }
}

// 2. AFFICHER LES CARTES (filtrées puis triées)
function showCards() {
    const ratings = getRatings();

    // On garde les cocktails testés ou non testés, selon la page.
    // "c.id in ratings" vaut vrai si une note existe pour ce cocktail.
    const shown = cocktails.filter(function (c) {
        const isTested = c.id in ratings;
        return mode === "tested" ? isTested : !isTested;
    });

    // On trie selon le choix de la liste déroulante.
    // sort() compare deux cocktails (a, b) : un nombre négatif place a avant b.
    const sort = sortSelect.value;
    shown.sort(function (a, b) {
        if (sort === "cost-asc") { return a.cost - b.cost; }
        if (sort === "cost-desc") { return b.cost - a.cost; }
        if (sort === "rating-desc") { return ratings[b.id] - ratings[a.id]; }
        return ratings[a.id] - ratings[b.id];
    });

    // On vide la zone, puis on y remet une carte par cocktail.
    list.innerHTML = "";
    for (const c of shown) {
        list.appendChild(createCard(c, ratings[c.id]));
    }

    if (shown.length === 0) {
        list.innerHTML = mode === "tested"
            ? "<p>Rien ici pour l'instant : ajoutez des cocktails depuis la page « À tester ».</p>"
            : "<p>Vous avez tout testé, bravo !</p>";
    }
}

// 3. FABRIQUER UNE CARTE (note vaut undefined si le cocktail n'est pas testé)
function createCard(c, note) {
    const card = document.createElement("article");
    card.className = "card";

    let bottom;
    if (note === undefined) {
        // Pas encore testé : liste de note + bouton d'ajout
        bottom = `
            <select aria-label="Note pour ${c.name}">
                <option value="1">1 ★</option>
                <option value="2">2 ★★</option>
                <option value="3" selected>3 ★★★</option>
                <option value="4">4 ★★★★</option>
                <option value="5">5 ★★★★★</option>
            </select>
            <button type="button">Ajouter à ma Glougloulist</button>`;
    } else {
        // Déjà testé : note en étoiles + bouton pour retirer
        bottom = `
            <p class="card-rating" aria-label="Note : ${note} sur 5">${"★".repeat(note)}${"☆".repeat(5 - note)}</p>
            <button type="button">Retirer de ma Glougloulist</button>`;
    }

    card.innerHTML = `
        <img class="card-image" src="images/${c.id}.webp" alt="" width="675" height="450" loading="lazy">
        <h2><a class="card-link" href="cocktails/${c.id}.html">${c.name}</a></h2>
        <p>${c.description}</p>
        <p>Coût estimé : ${c.cost.toLocaleString("fr-FR")} €</p>
        <div class="card-actions">${bottom}</div>`;

    // Chaque carte a exactement un bouton. Au clic :
    // - cocktail non testé : on enregistre la note choisie (ajout)
    // - cocktail testé : on supprime sa note (retrait)
    // Puis on réaffiche les cartes : le cocktail change de page tout seul.
    const button = card.querySelector("button");
    button.addEventListener("click", function () {
        const ratings = getRatings();

        if (note === undefined) {
            ratings[c.id] = Number(card.querySelector("select").value);
        } else {
            delete ratings[c.id];
        }

        saveRatings(ratings);
        showCards();
    });

    return card;
}

// 4. DÉMARRAGE : on réaffiche à chaque changement de tri, et une fois au chargement
sortSelect.addEventListener("change", showCards);
showCards();
