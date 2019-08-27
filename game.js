class Game {
  constructor(canvas){
    this.canvas=canvas;
    this.context = canvas.getContext('2d');

    this.board = new Board(this);
    this.char = new Character(this/* {
      up:'images/char.png',
      right:'images/charRight.png',
      down:'images/char.png',
      left:'images/charLeft.png'
    } */,0,0);
    this.sweet = new Sweet(this);
    this.timer = 0;
    this.SPEED = 0;
    this.controls={
      up:()=> this.char.moveUp(),
      right:()=> this.char.moveRight(),
      down:()=> this.char.moveDown(),
      left:()=> this.char.moveLeft()
    };
    this.control = new Control(this);
    this.control.setKeyBindings();
  }

  start () {
    this.loop(0);
  }

  loop (timestamp) {
    if (this.timer < timestamp - this.SPEED) {
      this.runLogic();
      this.paint();
      this.timer = timestamp;
    }
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }

  runLogic () {
  }

  clear () {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
  }

  paint () {
    this.clear();
    this.board.paint();
    this.char.paint();
    this.sweet.paint();
  }
}
