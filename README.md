# GLOUGLOU — Version pédagogique

## Pourquoi cette version ?

Chaque page a son **propre fichier HTML**. Le JavaScript ne fabrique plus les pages.

## Les liens important

1. Notre repo github https://github.com/Paradox3r/GLOUGLOULIST
2. Notre lien vers notre système de gestion de projet : "https://app.notion.com/p/SITE-GLOUGLOU-416050fae78180cb8634e2d51b41b8f0?source=copy_link"
3. Lien de notre site web https://siteela.alwaysdata.net
4. Lien de l'hystorique des prompts (page Notion) : "https://app.notion.com/p/Historique-des-prompts-IA-41b050fae78180ea9ccdc4a40fda0135?source=copy_link"

## Démarrer

1. Ouvrez le dossier dans VS Code.
2. Lancez `index.html` avec l'extension **Live Server**.
3. Cliquez sur les liens du menu pour naviguer.

## Structure

- `index.html` : accueil.
- `untested_cocktails.html` : liste des cocktails à tester.
- `glougloulist.html` : classement.
- `cocktail.html` : exemple d'une fiche cocktail.
- `settings.html` : bouton de style et formulaire.
- `css/style.css` : les règles communes (cartes, boutons, menu).
- `css/style.min.css` : css minimisé.
- `css/style-alternatif.css` : deuxième apparence.
- `css/style-alternatif.min.css` : deuxième apparence minimisé.
- `js/theme.js` : changement de feuille CSS.
- `js/feedback.js` : préparation d'un e-mail.

## Ce que vous devez comprendre

- `<a href="...">` permet de changer de page.
- `class="card"` permet de réutiliser l'apparence d'une carte.
- `id="change-theme"` permet au JavaScript de retrouver un bouton précis.
- `addEventListener("click", ...)` exécute du code au clic.
- `@media` adapte la mise en page aux petits écrans.

## Limitations volontaires

- Les cocktails sont **écrits directement dans le HTML**. Pas de base de données.
- Les liens « Voir la recette » mènent à **une fiche d'exemple** : vous devrez créer les autres fiches ou une vraie gestion de données plus tard.
- Le formulaire utilise `mailto:` : il prépare l'e-mail, mais l'utilisateur doit l'envoyer dans son logiciel de messagerie.
- Remplacez `contact@example.com` dans `js/feedback.js` par votre adresse.

## Ordre conseillé

1. Comprendre `index.html` et `css/style.css`.
2. Créer une nouvelle carte en copiant un `<article class="card">`.
3. Modifier les couleurs et espacements.
4. Comprendre `js/theme.js` puis `js/feedback.js`.
5. Ajouter les éléments obligatoires de l'énoncé, un à un.


