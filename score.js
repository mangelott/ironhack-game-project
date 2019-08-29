class Score{
  constructor(game){
    this.game=game;
  }

  paint(){
    const context = this.game.context;
    context.save();
    context.fillStyle = "black";
    context.font = "30px Verdana";
    context.fillText(`Fruits: ${this.game.fruits}`, 1150, 930);
  }
}