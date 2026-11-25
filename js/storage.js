// Mémoire des notes de l'utilisateur (stockée dans son navigateur)
const STORAGE_KEY = "glouglou-ratings";

// Lit toutes les notes. Exemple : { "margarita": 4, "negroni": 5 }
function getRatings() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
        return {};
    }
}

function saveRatings(ratings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
}

// Un cocktail est "testé" s'il a une note
function isTested(id) {
    return id in getRatings();
}

function getRating(id) {
    return getRatings()[id];
}

// Ajoute à la GlougLoulist, ou change la note
function setRating(id, rating) {
    const ratings = getRatings();
    ratings[id] = rating;
    saveRatings(ratings);
}

// Retire de la GlougLoulist (le cocktail redevient "à tester")
function removeRating(id) {
    const ratings = getRatings();
    delete ratings[id];
    saveRatings(ratings);
}

// Coût total d'un cocktail (somme des prix des ingrédients)
function getCost(cocktail) {
    let total = 0;
    for (const ingredient of cocktail.ingredients) {
        total += ingredient.price;
    }
    return Math.round(total * 100) / 100;
}
