class Obs {
  constructor(game) {
    this.game = game;
    this.setRandomPosition();
    this.x = this.x;
    this.y = this.y;
  }

  setRandomPosition() {
    this.x = (Math.floor(Math.random() * 13) * 100)+100;
    this.y = (Math.floor(Math.random() * 7) * 100);
  }

  paint() { 
      const context = this.game.context;
      const obs = new Image();
      obs.src = "images/tree.png";
      context.save();
      context.drawImage(obs, this.x, this.y, 100, 100);
      context.restore();
   }
}