// Liste des cocktails : sert à fabriquer les cartes de "À tester" et "Classement".
// Pour ajouter un cocktail : copier une ligne, changer les valeurs, et créer
// la fiche cocktails/<id>.html (l'id doit être identique au nom du fichier).
//
// id          : nom du fichier de la fiche, sans ".html"
// name        : nom affiché
// description : phrase courte
// cost        : coût estimé en euros (contenu de remplissage)

const cocktails = [
    { id: "mojito", name: "Mojito", description: "Menthe et citron vert.", cost: 5 },
    { id: "espresso-martini", name: "Espresso Martini", description: "Un cocktail gourmand au café.", cost: 6.5 },
    { id: "monaco", name: "Monaco", description: "Bière, limonade et grenadine.", cost: 2 },
    { id: "martini", name: "Martini", description: "Gin et vermouth, très sec.", cost: 4 },
    { id: "daiquiri", name: "Daiquiri", description: "Rhum blanc, citron vert et sucre.", cost: 3.5 },
    { id: "caipirinha", name: "Caipirinha", description: "Cachaça, citron vert et sucre.", cost: 3 },
    { id: "cuba-libre", name: "Cuba Libre", description: "Rhum, cola et citron vert.", cost: 3 },
    { id: "cosmopolitan", name: "Cosmopolitan", description: "Vodka, cranberry et citron vert.", cost: 4.5 },
    { id: "negroni", name: "Negroni", description: "Gin, Campari et vermouth rouge.", cost: 4.5 },
    { id: "tequila-sunrise", name: "Tequila Sunrise", description: "Tequila, orange et grenadine.", cost: 4 },
    { id: "aperol-spritz", name: "Aperol Spritz", description: "Prosecco, Aperol et eau gazeuse.", cost: 4 },
    { id: "moscow-mule", name: "Moscow Mule", description: "Vodka, ginger beer et citron vert.", cost: 4 },
    { id: "old-fashioned", name: "Old Fashioned", description: "Bourbon, sucre et amers.", cost: 4.5 }
];
