console.log("reservation.js chargé");

let panier = JSON.parse(localStorage.getItem('panier')) || [];

function afficherPanier() {
    const panierDiv = document.querySelector('.panier-vide');
    if (!panierDiv) return;

    if (panier.length === 0) {
        panierDiv.innerHTML = `<p>Votre panier est vide.</p><a href="formations.html" class="btn-commander">Ajouter des formations</a>`;
    } else {
        let total = 0;
        let html = `<ul class="panier-liste">`;
        panier.forEach((item, index) => {
            total += item.prix;
            html += `
                <li>
                    <span>${item.nom}</span>
                    <span>${item.prix} DA</span>
                    <button class="supprimer-btn" onclick="supprimerDuPanier(${index})">Supprimer</button>
                </li>
            `;
        });
        html += `</ul>`;
        html += `<div class="panier-total">Total : <strong>${total} DA</strong></div>`;
        html += `<button class="btn-commander" onclick="confirmerReservation()">Confirmer la réservation</button>`;
        panierDiv.innerHTML = html;
    }
}

window.ajouterAuPanier = function(formation) {
    const existe = panier.some(item => item.nom === formation.nom);
    if (existe) {
        alert(formation.nom + " est déjà dans votre panier.");
        return;
    }
    panier.push(formation);
    localStorage.setItem('panier', JSON.stringify(panier));
    alert(formation.nom + " ajouté au panier !");
};

function supprimerDuPanier(index) {
    panier.splice(index, 1);
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherPanier();
    alert("Formation retirée du panier.");
}

function confirmerReservation() {
    const session = JSON.parse(localStorage.getItem('session'));
    if (!session) {
        alert("Vous devez être connecté.");
        window.location.href = "connexion.html";
        return;
    }
    alert("Réservation confirmée ! Merci.");
    localStorage.removeItem('panier');
    setTimeout(() => {
        location.reload();
    }, 1500);
}

afficherPanier();