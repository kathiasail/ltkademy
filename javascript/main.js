console.log("main.js chargé");

const session = JSON.parse(localStorage.getItem('session'));
if (session) {
    const menu = document.querySelector('ul');
    if (menu && !document.querySelector('.deconnexion-btn')) {
        const btn = document.createElement('li');
        btn.innerHTML = '<a href="#" onclick="deconnexion()" class="deconnexion-btn">Déconnexion</a>';
        menu.appendChild(btn);
    }
}

function deconnexion() {
    localStorage.removeItem('session');
    alert("Déconnecté.");
    window.location.href = "index.html";
}