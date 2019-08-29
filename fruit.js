class Fruit {
  constructor(game) {
    this.game = game;
    this.setRandomPosition();
    this.x = this.x;
    this.y = this.y;
  }

  setRandomPosition() {
    this.x = (Math.floor(Math.random() * 13) * 100);
    this.y = (Math.floor(Math.random() * 9) * 100);
  }

  paint() {
    const context = this.game.context;
    const swt = new Image();
    swt.src = "images/sweet.png";
    context.save();
    context.drawImage(swt, 400, 385, 550, 600, this.x + 25, this.y + 25, 150, 150);
    context.restore();
  }
}