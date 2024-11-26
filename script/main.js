document.addEventListener('DOMContentLoaded', function() {
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const player3 = document.getElementById('player3');

    // Fonction pour déplacer un joueur
    function movePlayer(player, x, y) {
        player.style.transform = `translate(${x}px, ${y}px)`;
    }

    // Position initiale des joueurs
    let x1 = 100, y1 = 100;
    let x2 = 300, y2 = 200;
    let x3 = 500, y3 = 300;

    // Mise à jour des positions des joueurs toutes les 50ms
    setInterval(function() {
        x1 += 5; y1 += 5;
        x2 -= 5; y2 += 5;
        x3 += 10; y3 -= 5;

        movePlayer(player1, x1, y1);
        movePlayer(player2, x2, y2);
        movePlayer(player3, x3, y3);
    }, 50);  // Répétition toutes les 50ms
});
