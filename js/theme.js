// Ce script est chargé sur toutes les pages.
// Il change le fichier CSS utilisé par le navigateur.

const stylesheet = document.getElementById("theme-stylesheet");

// Le lien de la page vaut "css/style.min.css" ou "../css/style.min.css" (dans cocktails/).
// On en déduit le lien du style alternatif en changeant juste le nom du fichier.
const defaultHref = stylesheet.getAttribute("href");
const alternativeHref = defaultHref.replace("style.min.css", "style-alternatif.min.css");

// Si l'utilisateur avait choisi le style alternatif, on le restaure.
if (localStorage.getItem("theme") === "alternative") {
    stylesheet.href = alternativeHref;
}

const themeButton = document.getElementById("change-theme");

// Ce bouton n'existe que sur la page Paramètres.
if (themeButton !== null) {
    themeButton.addEventListener("click", function () {
        const isAlternative = stylesheet.getAttribute("href") === alternativeHref;

        if (isAlternative) {
            stylesheet.href = defaultHref;
            localStorage.setItem("theme", "default");
        } else {
            stylesheet.href = alternativeHref;
            localStorage.setItem("theme", "alternative");
        }
    });
}
