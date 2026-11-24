/* =========================================================
   GLOUGLOU – base de données des cocktails
   Pour ajouter un cocktail : copier un bloc { ... } complet,
   le coller à la fin de la liste (sans oublier la virgule
   entre deux blocs) et modifier les valeurs.

   Champs :
   - id           : identifiant unique, en minuscules, sans espace
                    (utilisé dans l'URL : cocktail.html?id=margarita)
   - name         : nom affiché
   - description  : phrase courte pour les cartes
   - emoji        : affiché tant qu'il n'y a pas de vraie image
   - image        : chemin de l'image (à créer dans img/)
   - baseAlcohol  : alcool principal (sert aux filtres)
   - difficulty   : "Facile", "Moyen" ou "Difficile"
   - ingredients  : liste { name, quantity, price }
                    price = coût estimé en € de la quantité utilisée
   - steps        : étapes de préparation, dans l'ordre

   Attention : les prix sont des estimations à vérifier
   (supermarché, bouteille entière divisée par les doses).
   ========================================================= */

const cocktails = [
    {
        id: "margarita",
        name: "Margarita",
        description: "Tequila, citron vert et bord de verre salé : un grand classique.",
        emoji: "🍋",
        image: "img/margarita.webp",
        baseAlcohol: "Tequila",
        difficulty: "Facile",
        ingredients: [
            { name: "Tequila", quantity: "5 cl", price: 1.5 },
            { name: "Triple sec", quantity: "2 cl", price: 0.4 },
            { name: "Jus de citron vert", quantity: "2,5 cl", price: 0.3 },
            { name: "Sel fin", quantity: "1 pincée", price: 0.05 }
        ],
        steps: [
            "Passer un quartier de citron vert sur le bord du verre, puis le tremper dans le sel.",
            "Verser la tequila, le triple sec et le jus de citron vert dans un shaker avec des glaçons.",
            "Secouer pendant 10 secondes.",
            "Filtrer dans le verre et servir."
        ]
    },
    {
        id: "cosmopolitan",
        name: "Cosmopolitan",
        description: "Vodka, cranberry et citron vert, rose et acidulé.",
        emoji: "🍸",
        image: "img/cosmopolitan.webp",
        baseAlcohol: "Vodka",
        difficulty: "Facile",
        ingredients: [
            { name: "Vodka", quantity: "4 cl", price: 0.8 },
            { name: "Triple sec", quantity: "1,5 cl", price: 0.3 },
            { name: "Jus de cranberry", quantity: "3 cl", price: 0.3 },
            { name: "Jus de citron vert", quantity: "1,5 cl", price: 0.2 }
        ],
        steps: [
            "Mettre tous les ingrédients dans un shaker rempli de glaçons.",
            "Secouer énergiquement pendant 10 secondes.",
            "Filtrer dans un verre à cocktail bien frais."
        ]
    },
    {
        id: "moscow-mule",
        name: "Moscow Mule",
        description: "Vodka, ginger beer et citron vert, piquant et frais.",
        emoji: "🫚",
        image: "img/moscow-mule.webp",
        baseAlcohol: "Vodka",
        difficulty: "Facile",
        ingredients: [
            { name: "Vodka", quantity: "5 cl", price: 1.0 },
            { name: "Ginger beer", quantity: "12 cl", price: 0.7 },
            { name: "Citron vert", quantity: "1/2", price: 0.2 }
        ],
        steps: [
            "Remplir un verre de glaçons.",
            "Verser la vodka et presser le demi-citron vert.",
            "Compléter avec la ginger beer.",
            "Mélanger doucement avec une cuillère."
        ]
    },
    {
        id: "old-fashioned",
        name: "Old Fashioned",
        description: "Whisky, sucre et amers : le cocktail des puristes.",
        emoji: "🥃",
        image: "img/old-fashioned.webp",
        baseAlcohol: "Whisky",
        difficulty: "Moyen",
        ingredients: [
            { name: "Bourbon", quantity: "6 cl", price: 1.8 },
            { name: "Sucre en morceau", quantity: "1", price: 0.05 },
            { name: "Angostura", quantity: "2 traits", price: 0.1 },
            { name: "Zeste d'orange", quantity: "1", price: 0.1 }
        ],
        steps: [
            "Déposer le sucre dans un verre et l'imbiber d'Angostura avec un peu d'eau.",
            "Écraser le sucre jusqu'à dissolution.",
            "Ajouter un gros glaçon et verser le bourbon.",
            "Mélanger 20 secondes, puis presser le zeste d'orange au-dessus du verre."
        ]
    },
    {
        id: "daiquiri",
        name: "Daiquiri",
        description: "Rhum blanc, citron vert et sucre : simple et redoutable.",
        emoji: "🍹",
        image: "img/daiquiri.webp",
        baseAlcohol: "Rhum",
        difficulty: "Facile",
        ingredients: [
            { name: "Rhum blanc", quantity: "6 cl", price: 1.0 },
            { name: "Jus de citron vert", quantity: "2,5 cl", price: 0.3 },
            { name: "Sirop de sucre", quantity: "1,5 cl", price: 0.1 }
        ],
        steps: [
            "Verser tous les ingrédients dans un shaker avec des glaçons.",
            "Secouer pendant 10 secondes.",
            "Filtrer dans un verre à cocktail refroidi."
        ]
    },
    {
        id: "negroni",
        name: "Negroni",
        description: "Gin, Campari et vermouth rouge : amer et intense.",
        emoji: "🍊",
        image: "img/negroni.webp",
        baseAlcohol: "Gin",
        difficulty: "Facile",
        ingredients: [
            { name: "Gin", quantity: "3 cl", price: 0.7 },
            { name: "Campari", quantity: "3 cl", price: 0.8 },
            { name: "Vermouth rouge", quantity: "3 cl", price: 0.4 },
            { name: "Zeste d'orange", quantity: "1", price: 0.1 }
        ],
        steps: [
            "Remplir un verre de glaçons.",
            "Verser le gin, le Campari et le vermouth à parts égales.",
            "Mélanger délicatement avec une cuillère.",
            "Décorer avec un zeste d'orange."
        ]
    },
    {
        id: "aperol-spritz",
        name: "Aperol Spritz",
        description: "Prosecco, Aperol et eau gazeuse : l'apéro de l'été.",
        emoji: "🧡",
        image: "img/aperol-spritz.webp",
        baseAlcohol: "Prosecco",
        difficulty: "Facile",
        ingredients: [
            { name: "Prosecco", quantity: "9 cl", price: 0.9 },
            { name: "Aperol", quantity: "6 cl", price: 1.0 },
            { name: "Eau gazeuse", quantity: "3 cl", price: 0.05 },
            { name: "Tranche d'orange", quantity: "1", price: 0.2 }
        ],
        steps: [
            "Remplir un grand verre de glaçons.",
            "Verser le prosecco, puis l'Aperol.",
            "Ajouter un trait d'eau gazeuse.",
            "Décorer avec une tranche d'orange."
        ]
    },
    {
        id: "caipirinha",
        name: "Caipirinha",
        description: "Cachaça, citron vert et sucre, le cocktail du Brésil.",
        emoji: "🇧🇷",
        image: "img/caipirinha.webp",
        baseAlcohol: "Cachaça",
        difficulty: "Facile",
        ingredients: [
            { name: "Cachaça", quantity: "5 cl", price: 1.0 },
            { name: "Citron vert", quantity: "1", price: 0.4 },
            { name: "Sucre", quantity: "2 cuillères à café", price: 0.1 }
        ],
        steps: [
            "Couper le citron vert en morceaux et les mettre dans un verre avec le sucre.",
            "Écraser pour libérer le jus.",
            "Ajouter de la glace pilée et verser la cachaça.",
            "Mélanger et servir."
        ]
    },
    {
        id: "cuba-libre",
        name: "Cuba Libre",
        description: "Rhum, cola et citron vert, facile à faire à la maison.",
        emoji: "🥤",
        image: "img/cuba-libre.webp",
        baseAlcohol: "Rhum",
        difficulty: "Facile",
        ingredients: [
            { name: "Rhum", quantity: "5 cl", price: 1.0 },
            { name: "Cola", quantity: "12 cl", price: 0.25 },
            { name: "Citron vert", quantity: "1/2", price: 0.2 }
        ],
        steps: [
            "Remplir un verre de glaçons.",
            "Verser le rhum et presser le demi-citron vert.",
            "Compléter avec le cola et mélanger."
        ]
    },
    {
        id: "tequila-sunrise",
        name: "Tequila Sunrise",
        description: "Tequila, jus d'orange et grenadine : un dégradé de lever de soleil.",
        emoji: "🌅",
        image: "img/tequila-sunrise.webp",
        baseAlcohol: "Tequila",
        difficulty: "Facile",
        ingredients: [
            { name: "Tequila", quantity: "4,5 cl", price: 1.4 },
            { name: "Jus d'orange", quantity: "9 cl", price: 0.3 },
            { name: "Grenadine", quantity: "1,5 cl", price: 0.1 }
        ],
        steps: [
            "Verser la tequila et le jus d'orange dans un verre rempli de glaçons.",
            "Mélanger.",
            "Verser la grenadine doucement sur le bord : elle coule au fond et crée le dégradé."
        ]
    }
];
