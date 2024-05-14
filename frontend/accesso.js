document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    // Qui potresti aggiungere la logica per verificare l'email
    console.log('Email:', email);
    // Salviamo l'email nel localStorage per utilizzarla nelle altre pagine
    localStorage.setItem('email', email);
    // Reindirizziamo l'utente alla pagina del gioco
    window.location.href = 'pagina2.html';
});
