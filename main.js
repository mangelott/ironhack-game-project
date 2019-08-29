
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    const $canvas = document.querySelector('canvas');
    const intro= document.getElementById('game-intro')
    const game = new Game($canvas);
    game.gameStatus = "play"
    $canvas.classList.remove('hide');
    intro.classList.add('hide');
    game.start();
  }
}

