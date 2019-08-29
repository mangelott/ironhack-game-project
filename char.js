class Character {

  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = "images/char.png";
    this.score = 0;
    this.direction = ""
    this.SPEED = 10
  }

  walk() {
    if (this.direction === "left") {
      this.moveLeft()
    } else if (this.direction === "up") {
      this.moveUp();
    } else if (this.direction === "right") {
      this.moveRight();
    } else if (this.direction === "down") {
      this.moveDown();
    }
    const fruitPosition = this.game.fruit;
    const distance = 50;
    const obsDist = 50;
    if (
      (this.x > fruitPosition.x - distance && this.x < fruitPosition.x + distance) &&
      (this.y > fruitPosition.y - distance && this.y < fruitPosition.y + distance)
    ) {
      this.game.eatFruit();
    }
    for (let obs of this.game.obstacles) {
      if(
        (this.x > obs.x - obsDist && this.x < obs.x + obsDist) &&
        (this.y > obs.y - obsDist && this.y < obs.y + obsDist)
      ){
        if (this.direction === "left") {
          this.moveRight(); 
        } else if (this.direction === "up") {
          this.moveDown();
        } else if (this.direction === "right") {
          this.moveLeft();
        } else if (this.direction === "down") {
          this.moveUp();
        }
        this.game.loose();
      }
    }
  }

  moveLeft() {
    this.image.src = 'images/charLeft.png';
    this.direction = "left";
    if (this.x == 0 ? this.x : this.x -= this.SPEED);
  }
  moveUp() {
    this.image.src = 'images/charUp.png';
    this.direction = "up";
    if (this.y !== 0 ? this.y -= this.SPEED : this.y);
  }
  moveRight() {
    this.image.src = 'images/charRight.png'
    this.direction = "right";
    if (this.x + 50 <= 850 ? this.x += this.SPEED : this.x);
  }

  moveDown() {
    this.image.src = 'images/charDown.png'
    this.direction = "down";
    if (this.y + 50 < 850 ? this.y += this.SPEED : this.y);
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(this.image, this.x, this.y, 100, 100);
    context.restore();
  }
}