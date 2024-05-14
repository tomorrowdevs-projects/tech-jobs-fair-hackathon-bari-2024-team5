var timerElement = document.getElementById('timer');
var timer = parseInt(timerElement.innerText);
var intervalId = setInterval(function () {
    timer--;
    timerElement.innerText = timer;
    if (timer <= 0) {
        clearInterval(intervalId);
        console.log('Tempo scaduto!');
        // Reindirizziamo l'utente alla pagina dei punteggi
        window.location.href = 'pagina3.html';
    }
}, 1000);
