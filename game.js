class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.board = new Board(this);
    this.scorePane=new Score(this);
    this.char = new Character(this, 0, 0);
    this.fruit = new Fruit(this);
    this.obstacles = [];
    this.timer = 0;
    this.SPEED = 0;
    this.fruits = 0;
    this.control = new Control(this);
    this.control.setKeyBindings();
    this.controls = {
      up: () => this.char.moveUp(),
      right: () => this.char.moveRight(),
      down: () => this.char.moveDown(),
      left: () => this.char.moveLeft()
    };

    for (let i = 0; i < 15; i++) {
      const obstacle = new Obs(this);
      this.obstacles.push(obstacle);
    }
  }

  start() {
    this.loop(0);
  }

  loop(timestamp) {
    if (this.timer < timestamp - this.SPEED) {
      this.runLogic();
      this.paint();
      this.timer = timestamp;
    }
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }

  loose(){
    (this.fruits===0?this.endGame():this.fruits--);

  }

  endGame(){
    console.log("GAME OVER");

  }
  eatFruit() {
    this.fruits ++;
    this.fruit.setRandomPosition();
    console.log(this.fruits);
  }

  runLogic() {
    this.char.walk()
  }

  clear() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
  }

  paint() {
    this.clear();
    this.scorePane.paint();
    this.board.paint();
    for (let obstacle of this.obstacles) {
      obstacle.paint();
    }
    this.char.paint();
    this.fruit.paint();
  }
}