class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.board = new Board(this);
    this.scorePane = new Score(this);
    this.char = new Character(this, 0, 0);
    this.fruit = new Fruit(this);
    this.special = new Fruit(this);
    this.obstacles = [];
    this.timer = 0;
    this.SPEED = 0;
    this.fruits = 0;
    this.gameStatus = "play";
    this.control = new Control(this);
    this.control.setKeyBindings();
    this.intro = document.getElementById('game-intro');
    this.over = document.getElementById('game-over');
    this.audioInit = new Audio('sounds/Bravo is the name.mp3');
    this.audioHit = new Audio('sounds/Holy guacamole.mp3');
    this.audioOver = new Audio('sounds/Life is cruel.mp3');
    this.controls = {
      up: () => this.char.moveUp(),
      right: () => this.char.moveRight(),
      down: () => this.char.moveDown(),
      left: () => this.char.moveLeft()
    };

    for (let i = 0; i < 20; i++) {
      const obstacle = new Obs(this);
      this.obstacles.push(obstacle);
    }
  }

  start() {
    this.loop(0);
  }

  loop(timestamp) {
    if (this.gameStatus === "play") {
      if (this.timer < timestamp - this.SPEED) {
        this.runLogic();
        this.paint();
        this.timer = timestamp;
      }
      if (this.gameStatus === "game-over") {
        this.endGame()
      }
    }
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }

  loose() {
    this.audioHit.play();
    (this.fruits === 0 ? this.gameStatus = "game-over" : this.fruits--);

  }

  endGame() {
    this.audioHit.pause();
    console.log("GAME OVER", this.gameStatus);
    this.audioOver.play();
    this.canvas.classList.add('hide');
    this.over.style.display = "flex";
  }

  eatFruit() {
    this.fruits++;
    this.fruit.setRandomPosition();
    this.special.setRandomPosition();
    // this.checkScore();
  }

  eatSpecial() {
    this.char.SPEED += 2;
    this.fruits += 3;
    this.special.setRandomPosition();
    // this.checkScore();
  }



  /* checkScore(){
    if(this.fruits%2===0){
      console.log("BAMM");
      this.special.paintSpecial();
    }
    else{
      console.log("not yet")
    }
  } */

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
      if (obstacle.x == this.fruit.x && obstacle.y == this.fruit.y) {
        this.fruit.setRandomPosition();
      } else if (obstacle.x == this.special.x && obstacle.y == this.special.y) {
        this.special.setRandomPosition();
      }
      obstacle.paint();
    }
    this.char.paint();
    if ( this.fruits!==0 &&  this.fruits % 3 === 0) {
      this.special.paintSpecial();
    }
    this.fruit.paint();
  }
}