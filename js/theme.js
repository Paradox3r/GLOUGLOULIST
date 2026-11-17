// Ce script est chargé sur toutes les pages.
// Il change le fichier CSS utilisé par le navigateur.

const stylesheet = document.getElementById("theme-stylesheet");
const savedTheme = localStorage.getItem("theme");

// Si l'utilisateur avait choisi le style alternatif, on le restaure.
if (savedTheme === "alternative") {
    stylesheet.href = "css/style-alternatif.css";
}

const themeButton = document.getElementById("change-theme");

// Ce bouton n'existe que sur la page Paramètres.
if (themeButton !== null) {
    themeButton.addEventListener("click", function () {
        const isAlternative = stylesheet.getAttribute("href") === "css/style-alternatif.css";

        if (isAlternative) {
            stylesheet.href = "css/style.css";
            localStorage.setItem("theme", "default");
        } else {
            stylesheet.href = "css/style-alternatif.css";
            localStorage.setItem("theme", "alternative");
        }
    });
}
