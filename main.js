//main.js
// var ctx = $canvas.getContext('2d');

// function drawGrid() {
//   for(let x=1;x<=489;x+=50){
//     for(let y=1;y<=489;y+=50){
//       ctx.fillStyle="white";
//       ctx.fillRect(x, y,48,48);
//     }
//   }
// }

window.addEventListener('load', function () {
  var $canvas = document.querySelector('canvas');
  const game = new Game($canvas);
  game.start();
});
