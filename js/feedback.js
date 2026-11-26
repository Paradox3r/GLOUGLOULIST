// Le formulaire prépare un e-mail, sans serveur.
// IMPORTANT : remplacez l'adresse ci-dessous par la vôtre.
const destinationEmail = "louis.mas@etu.univ-amu.fr";

const feedbackForm = document.getElementById("feedback-form");

feedbackForm.addEventListener("submit", function (event) {
    // Empêche le rechargement normal de la page.
    event.preventDefault();

    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const body = "E-mail du visiteur : " + email + "\n\n" + message;
    const mailtoLink = "mailto:" + destinationEmail
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(body);

    // Ouvre le logiciel de messagerie configuré sur l'appareil.
    window.location.href = mailtoLink;
});
