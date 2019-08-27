class Sweet{
  constructor(game, x,y) {
    this.game = game;
    this.setRandomPosition();
  }

  setRandomPosition(){
    this.x=(Math.floor(Math.random()*9));
    this.y=(Math.floor(Math.random()*9));
  }

   paint () {
    const context = this.game.context;
    const swt=new Image();
    swt.src="images/sweet.png";
    context.save(); 
    context.drawImage(swt,400,385,550,600,((this.x)*100)+30,((this.y)*100)+30,120,120); 
    context.restore();
  }
}
