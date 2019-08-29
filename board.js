class Board{
  constructor(game){
    this.game=game;
  }
  
  paint () {
    const context = this.game.context;
    const grass=new Image();
    grass.src="images/grass.jpg";
    context.save();
    for(let x=0;x<=1300;x+=100){
      for(let y=0;y<700;y+=100){
        context.drawImage(grass,x,y,100,100);
      }
    }
  }
}
