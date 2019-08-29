class Board{
  constructor(game){
    this.game=game;
  }

  paintOver(){
    const context = this.game.context;
    const overImg = new Image();
    obs.src = "images/gover.png";
    context.save();
    context.drawImage(obs, 500, 500, 300, 300);
    context.restore();
  }

  paint () {
    const context = this.game.context;
    const grass=new Image();
    grass.src="images/grass.jpg";
    context.save();
    for(let x=0;x<=900;x+=100){
      for(let y=0;y<900;y+=100){
        context.drawImage(grass,x,y,100,100);
      }
    }
  }
}
