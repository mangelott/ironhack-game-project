class Score{
  constructor(game){
    this.game=game;
  }

  paint(){
    const context = this.game.context;
    context.save();
    context.fillStyle="White";
    context.fillRect(0,900,900,50);
    context.fillStyle = "black";
    context.font = "30px Verdana";
    context.fillText(`Fruits: ${this.game.fruits}`, 750, 930);
  }
}