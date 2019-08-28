class Fruit{
  constructor(game, x,y) {
    this.game = game;
    this.setRandomPosition();
    this.x=this.x;
    this.y=this.y;
  }

  setRandomPosition(){
    this.x=(Math.floor(Math.random()*9)*100);
    this.y=(Math.floor(Math.random()*9)*100);
  }

   paint () {
    const context = this.game.context;
    const swt=new Image();
    const colision=this.game.context;
    swt.src="images/sweet.png";
    context.save(); 
    context.drawImage(swt,400,385,550,600,this.x+25,this.y+25,150,150); 
    console.log(`TREASURE:${this.x}|${this.y}`);
    context.restore();
    colision.x
    colision.beginPath();
    colision.globalAlpha=0.5;
    colision.arc(50, 50, 50, 0, Math.PI*2, true);
    colision.moveTo(290,75)
    colision.stroke();
    colision.fill();
    colision.restore();
  }
}
