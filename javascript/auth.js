console.log("auth.js chargé");
if (document.querySelector('.inscription-container')) {
    const form = document.querySelector('.inscription-container form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value.trim();
            const password = form.querySelectorAll('input[type="password"]')[0].value;
            const confirm = form.querySelectorAll('input[type="password"]')[1].value;
            const tel = form.querySelector('input[type="tel"]')?.value.trim() || '';

            const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
            const phoneRegex = /^(05|06|07)[0-9]{8}$/;
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

            if (!emailRegex.test(email)) return alert("Email invalide.");
            if (tel && !phoneRegex.test(tel)) return alert("Téléphone invalide (05,06,07 suivi de 8 chiffres).");
            if (!passwordRegex.test(password)) return alert("Mot de passe : 8 caractères, 1 majuscule, 1 chiffre.");
            if (password !== confirm) return alert("Les mots de passe ne correspondent pas.");

            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.find(u => u.email === email)) return alert("Email déjà utilisé.");
            users.push({ email, password, tel });
            localStorage.setItem('users', JSON.stringify(users));
            alert("Inscription réussie ! Connectez-vous.");
            window.location.href = "connexion.html";
        });
    }
}

if (document.querySelector('.connexion-container')) {
    const form = document.querySelector('.connexion-container form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value.trim();
            const password = form.querySelector('input[type="password"]').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                localStorage.setItem('session', JSON.stringify({ email: user.email }));
                alert("Connexion réussie !");
                window.location.href = "index.html";
            } else {
                alert("Email ou mot de passe incorrect.");
            }
        });
    }
}