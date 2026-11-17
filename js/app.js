// GLOUGLOU : un seul fichier JS, sans framework. Facile à découper ensuite.

// 1. Cocktails de démonstration
const exemples=[
{id:1,nom:"Espresso Martini",description:"Un cocktail gourmand au café.",prix:6.5,difficulte:"Facile",statut:"teste",note:5,image:"☕",ingredients:"Vodka : 4 cl\nLiqueur de café : 2 cl\nEspresso : 3 cl",preparation:"Secouer avec des glaçons.\nFiltrer et servir.",avis:"Notre préféré !"},
{id:2,nom:"Mojito",description:"Menthe et citron vert.",prix:5,difficulte:"Facile",statut:"teste",note:4,image:"🍃",ingredients:"Rhum : 4 cl\nMenthe\nCitron vert",preparation:"Écraser doucement la menthe et le citron.\nAjouter le rhum et les glaçons.",avis:"Très frais."},
{id:3,nom:"Piña Colada",description:"Une touche tropicale.",prix:7,difficulte:"Moyen",statut:"tester",note:0,image:"🍍",ingredients:"Rhum : 4 cl\nAnanas : 9 cl\nCrème de coco : 3 cl",preparation:"Mixer et servir.",avis:""}
];

// 2. Stockage local et fonctions utilitaires
const cle="glouglou-cocktails";
let cocktails=JSON.parse(localStorage.getItem(cle)||"null")||exemples;
const app=document.querySelector("#app");
const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const stars=n=>`<span class="stars">${"★".repeat(Math.max(0,Math.min(5,Number(n)||0)))}${"☆".repeat(5-Math.max(0,Math.min(5,Number(n)||0)))}</span>`;
const euro=n=>Number(n||0).toLocaleString("fr-FR",{style:"currency",currency:"EUR"});
const save=()=>localStorage.setItem(cle,JSON.stringify(cocktails));

// 3. Affichage des cartes et des pages
function card(c){return `<article class="card"><div class="art">${esc(c.image||"🍹")}</div><h3>${esc(c.nom)}</h3><p>${esc(c.description)}</p><p>${euro(c.prix)} · ${esc(c.difficulte)}</p><p>${c.statut==="teste"?stars(c.note):"À tester"}</p><a class="btn secondary" href="#fiche/${c.id}">Voir la fiche</a></article>`}
const grid=items=>items.length?`<div class="grid">${items.map(card).join("")}</div>`:"<p>Aucun cocktail pour le moment.</p>";
function home(){let test=cocktails.filter(c=>c.statut==="teste");return `<h1>On trinque à quoi ?</h1><p class="lead">Nos cocktails préférés, nos découvertes et ceux qu'on veut tester.</p><a class="btn" href="#ajouter">+ Ajouter un cocktail</a><p>${test.length} testés · ${cocktails.length-test.length} à tester</p><h2>Notre top 3</h2>${grid(test.sort((a,b)=>b.note-a.note).slice(0,3))}`}
function fiche(id){let c=cocktails.find(x=>String(x.id)===id);if(!c)return "<h1>Introuvable</h1>";return `<h1>${esc(c.nom)}</h1><div class="art">${esc(c.image)}</div><p>${esc(c.description)}</p><p>${euro(c.prix)} · ${esc(c.difficulte)} · ${c.statut==="teste"?stars(c.note):"À tester"}</p><h2>Ingrédients</h2><p>${esc(c.ingredients).replace(/\n/g,"<br>")}</p><h2>Préparation</h2><p>${esc(c.preparation).replace(/\n/g,"<br>")}</p><h2>Avis</h2><p>${esc(c.avis)}</p><a class="btn" href="#modifier/${c.id}">Modifier</a><button data-delete="${c.id}">Supprimer</button>`}
function form(id){let c=cocktails.find(x=>String(x.id)===id)||{};let v=k=>esc(c[k]??"");return `<h1>${id?"Modifier":"Ajouter"} un cocktail</h1><form id="cocktail" data-id="${id||""}"><label>Nom *</label><input name="nom" required value="${v("nom")}"><label>Description</label><textarea name="description">${v("description")}</textarea><label>Image (emoji provisoire)</label><input name="image" value="${v("image")}"><label>Prix (€)</label><input type="number" step=".01" min="0" name="prix" value="${v("prix")}"><label>Difficulté</label><select name="difficulte">${["Facile","Moyen","Difficile"].map(x=>`<option ${c.difficulte===x?"selected":""}>${x}</option>`).join("")}</select><label>Statut</label><select name="statut"><option value="tester" ${c.statut!=="teste"?"selected":""}>À tester</option><option value="teste" ${c.statut==="teste"?"selected":""}>Testé</option></select><label>Note (sur 5)</label><select name="note">${[0,1,2,3,4,5].map(x=>`<option ${Number(c.note||0)===x?"selected":""}>${x}</option>`).join("")}</select><label>Ingrédients (un par ligne)</label><textarea name="ingredients">${v("ingredients")}</textarea><label>Préparation</label><textarea name="preparation">${v("preparation")}</textarea><label>Avis</label><textarea name="avis">${v("avis")}</textarea><button>Enregistrer</button></form>`}
function settings(){return `<h1>Paramètres</h1><section class="panel"><h2>Apparence</h2><button id="theme">Changer de style clair / sombre</button></section><section class="panel"><h2>Faire un retour</h2><p>Pour l'instant, les retours sont enregistrés uniquement dans ce navigateur.</p><form id="retour"><label>Sujet *</label><input name="sujet" required><label>E-mail (facultatif)</label><input type="email" name="email"><label>Message *</label><textarea name="message" required></textarea><button>Enregistrer le retour</button><p id="confirmation"></p></form></section>`}
function render(){let [page,id]=(location.hash.slice(1)||"accueil").split("/");app.innerHTML=page==="accueil"?home():page==="tester"?`<h1>À tester</h1><a class="btn" href="#ajouter">+ Ajouter</a>${grid(cocktails.filter(c=>c.statut==="tester"))}`:page==="classement"?`<h1>Classement</h1>${grid(cocktails.filter(c=>c.statut==="teste").sort((a,b)=>b.note-a.note))}`:page==="fiche"?fiche(id):page==="ajouter"?form():page==="modifier"?form(id):page==="parametres"?settings():"<h1>Page introuvable</h1>"}

// 4. Gestion des formulaires
document.addEventListener("submit",e=>{if(e.target.id==="cocktail"){e.preventDefault();let d=Object.fromEntries(new FormData(e.target)),id=Number(e.target.dataset.id)||Date.now();let c={...d,id,prix:Number(d.prix)||0,note:d.statut==="teste"?Number(d.note):0};cocktails=cocktails.filter(x=>x.id!==id);cocktails.push(c);save();location.hash="#fiche/"+id;render()}if(e.target.id==="retour"){e.preventDefault();let r=JSON.parse(localStorage.getItem("glouglou-retours")||"[]");r.push({...Object.fromEntries(new FormData(e.target)),date:new Date().toISOString()});localStorage.setItem("glouglou-retours",JSON.stringify(r));e.target.reset();document.querySelector("#confirmation").textContent="Retour enregistré localement."}});

// 5. Gestion des clics (thème et suppression)
document.addEventListener("click",e=>{if(e.target.id==="theme"){document.body.classList.toggle("dark");localStorage.setItem("glouglou-theme",document.body.classList.contains("dark")?"dark":"light")}if(e.target.dataset.delete&&confirm("Supprimer ce cocktail ?")){cocktails=cocktails.filter(c=>String(c.id)!==e.target.dataset.delete);save();location.hash="#accueil";render()}});

// 6. Initialisation du site
document.body.classList.toggle("dark",localStorage.getItem("glouglou-theme")==="dark");window.addEventListener("hashchange",render);render();
