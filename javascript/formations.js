console.log("formations.js chargé");

const formations = [
    {
        "id": 1,
        "nom": "Python débutant",
        "type": "backend",
        "niveau": "debutant",
        "prix": 8000,
        "duree": "8 semaines",
        "icone": "python.png",
        "lien": "langages/python.html"
    },
    {
        "id": 2,
        "nom": "Python avancé",
        "type": "backend",
        "niveau": "avance",
        "prix": 12000,
        "duree": "10 semaines",
        "icone": "python.png",
        "lien": "langages/python.html"
    },
    {
        "id": 3,
        "nom": "JavaScript débutant",
        "type": "frontend",
        "niveau": "debutant",
        "prix": 8000,
        "duree": "8 semaines",
        "icone": "js.png",
        "lien": "langages/javascript.html"
    },
    {
        "id": 4,
        "nom": "JavaScript avancé",
        "type": "frontend",
        "niveau": "avance",
        "prix": 12000,
        "duree": "10 semaines",
        "icone": "js.png",
        "lien": "langages/javascript.html"
    },
    {
        "id": 5,
        "nom": "HTML/CSS débutant",
        "type": "frontend",
        "niveau": "debutant",
        "prix": 6000,
        "duree": "8 semaines",
        "icone": "html-css.png",
        "lien": "langages/html-css.html"
    },
    {
        "id": 6,
        "nom": "HTML/CSS avancé",
        "type": "frontend",
        "niveau": "avance",
        "prix": 10000,
        "duree": "10 semaines",
        "icone": "html-css.png",
        "lien": "langages/html-css.html"
    },
    {
        "id": 7,
        "nom": "SQL débutant",
        "type": "backend",
        "niveau": "debutant",
        "prix": 7000,
        "duree": "6 semaines",
        "icone": "sql.png",
        "lien": "langages/sql.html"
    },
    {
        "id": 8,
        "nom": "SQL avancé",
        "type": "backend",
        "niveau": "avance",
        "prix": 10000,
        "duree": "8 semaines",
        "icone": "sql.png",
        "lien": "langages/sql.html"
    },
    {
        "id": 9,
        "nom": "Java débutant",
        "type": "backend",
        "niveau": "debutant",
        "prix": 9000,
        "duree": "8 semaines",
        "icone": "java.png",
        "lien": "langages/java.html"
    },
    {
        "id": 10,
        "nom": "Java avancé",
        "type": "backend",
        "niveau": "avance",
        "prix": 13000,
        "duree": "10 semaines",
        "icone": "java.png",
        "lien": "langages/java.html"
    },
    {
        "id": 11,
        "nom": "PHP débutant",
        "type": "backend",
        "niveau": "debutant",
        "prix": 7000,
        "duree": "6 semaines",
        "icone": "php.png",
        "lien": "langages/php.html"
    },
    {
        "id": 12,
        "nom": "PHP avancé",
        "type": "backend",
        "niveau": "avance",
        "prix": 11000,
        "duree": "8 semaines",
        "icone": "php.png",
        "lien": "langages/php.html"
    }
];

const grid = document.querySelector('.formations-grid');
if (grid) {
    grid.innerHTML = '';
    formations.forEach(formation => {
        grid.innerHTML += `
            <div class="formation-card" data-type="${formation.type}" data-niveau="${formation.niveau}">
                <a href="${formation.lien}">
                    <img src="image/${formation.icone}" alt="${formation.nom}">
                    <h3>${formation.nom}</h3>
                    <p>Prix : ${formation.prix} DA</p>
                    <p>Durée : ${formation.duree}</p>
                </a>
                <button onclick="ajouterAuPanier({nom: '${formation.nom}', prix: ${formation.prix}})">Réserver</button>
            </div>
        `;
    });
} else {
    console.error("Grid .formations-grid introuvable");
}

const btnTous = document.getElementById('btnTous');
const btnFrontend = document.getElementById('btnFrontend');
const btnBackend = document.getElementById('btnBackend');
const sousFiltresFrontend = document.getElementById('sousFiltresFrontend');
const sousFiltresBackend = document.getElementById('sousFiltresBackend');

let typeActuel = 'tous';
let niveauActuel = null;

function afficherCartes() {
    const cartes = document.querySelectorAll('.formation-card');
    cartes.forEach(carte => {
        const type = carte.getAttribute('data-type');
        const niveau = carte.getAttribute('data-niveau');
        let visible = false;

        if (typeActuel === 'tous') {
            visible = true;
        } else if (typeActuel === 'frontend' && type === 'frontend') {
            visible = (niveauActuel === null || niveau === niveauActuel);
        } else if (typeActuel === 'backend' && type === 'backend') {
            visible = (niveauActuel === null || niveau === niveauActuel);
        }

        carte.style.display = visible ? 'block' : 'none';
    });
}

if (btnTous) btnTous.addEventListener('click', () => {
    typeActuel = 'tous';
    niveauActuel = null;
    if (sousFiltresFrontend) sousFiltresFrontend.style.display = 'none';
    if (sousFiltresBackend) sousFiltresBackend.style.display = 'none';
    afficherCartes();
});

if (btnFrontend) btnFrontend.addEventListener('click', () => {
    typeActuel = 'frontend';
    niveauActuel = null;
    if (sousFiltresFrontend) sousFiltresFrontend.style.display = 'flex';
    if (sousFiltresBackend) sousFiltresBackend.style.display = 'none';
    afficherCartes();
});

if (btnBackend) btnBackend.addEventListener('click', () => {
    typeActuel = 'backend';
    niveauActuel = null;
    if (sousFiltresFrontend) sousFiltresFrontend.style.display = 'none';
    if (sousFiltresBackend) sousFiltresBackend.style.display = 'flex';
    afficherCartes();
});

document.querySelectorAll('.niveau-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const type = e.target.getAttribute('data-type');
        const niveau = e.target.getAttribute('data-niveau');
        if (typeActuel === type) {
            niveauActuel = niveau;
            afficherCartes();
        }
    });
});