// Liste des cocktails : sert à fabriquer les cartes de "À tester" et "Classement".
// Pour ajouter un cocktail : copier une ligne, changer les valeurs, et créer
// la fiche cocktails/<id>.html (l'id doit être identique au nom du fichier).
//
// id          : nom du fichier de la fiche, sans ".html"
// name        : nom affiché
// emoji       : image provisoire
// description : phrase courte
// cost        : coût estimé en euros (contenu de remplissage)

const cocktails = [
    { id: "mojito", name: "Mojito", emoji: "🍃", description: "Menthe et citron vert.", cost: 5 },
    { id: "espresso-martini", name: "Espresso Martini", emoji: "☕", description: "Un cocktail gourmand au café.", cost: 6.5 },
    { id: "monaco", name: "Monaco", emoji: "🍺", description: "Bière, limonade et grenadine.", cost: 2 },
    { id: "martini", name: "Martini", emoji: "🍸", description: "Gin et vermouth, très sec.", cost: 4 },
    { id: "daiquiri", name: "Daiquiri", emoji: "🍹", description: "Rhum blanc, citron vert et sucre.", cost: 3.5 },
    { id: "caipirinha", name: "Caipirinha", emoji: "🇧🇷", description: "Cachaça, citron vert et sucre.", cost: 3 },
    { id: "cuba-libre", name: "Cuba Libre", emoji: "🥤", description: "Rhum, cola et citron vert.", cost: 3 },
    { id: "cosmopolitan", name: "Cosmopolitan", emoji: "🌸", description: "Vodka, cranberry et citron vert.", cost: 4.5 },
    { id: "negroni", name: "Negroni", emoji: "🍊", description: "Gin, Campari et vermouth rouge.", cost: 4.5 },
    { id: "tequila-sunrise", name: "Tequila Sunrise", emoji: "🌅", description: "Tequila, orange et grenadine.", cost: 4 },
    { id: "aperol-spritz", name: "Aperol Spritz", emoji: "🧡", description: "Prosecco, Aperol et eau gazeuse.", cost: 4 },
    { id: "moscow-mule", name: "Moscow Mule", emoji: "🫚", description: "Vodka, ginger beer et citron vert.", cost: 4 },
    { id: "old-fashioned", name: "Old Fashioned", emoji: "🥃", description: "Bourbon, sucre et amers.", cost: 4.5 }
];
