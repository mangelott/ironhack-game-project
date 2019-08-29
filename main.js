/* window.addEventListener('load', function () {
  var $canvas = document.querySelector('canvas');
  const game = new Game($canvas);
  game.start();
});
 */

window.onload = function() {
  // document.getElementById("start-button").onclick = function() {
    const $canvas = document.querySelector('canvas');
    const game = new Game($canvas); 
    game.start();
  }
// }
