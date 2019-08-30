window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    const $canvas = document.querySelector('canvas');
    const intro = document.getElementById('game-intro');
    const over=document.getElementById('game-over');
    const game = new Game($canvas);
    game.gameStatus = "play"
    game.audioInit.play();
    $canvas.classList.remove('hide');
    intro.classList.add('hide');
    over.classList.add('hide');
    game.start();
    //}
  }

  document.getElementById("restart-button").onclick= function(){
    const $canvas = document.querySelector('canvas');
    const intro = document.getElementById('game-intro');
    const over=document.getElementById('game-over');
    // const game = new Game($canvas);

    over.style.display="none";
    intro.classList.remove('hide');
  }
}