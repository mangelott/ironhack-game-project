class Character {

  constructor(game, x,y) {
    this.game = game;
    this.x=x;
    this.y=y;
    this.image=this;
    this.score=0;
  }

  moveLeft(){
    if(this.x-50>=0 ?this.x-=50:this.z);
    console.log("Moving Left"+this.x);
  }
  moveUp(){
    if(this.y-50>=0?this.y-=50:this.y);
    console.log("Moving up"+this.y);
  }
  moveRight(){
    if(this.x+50<=825?this.x+=50:this.x);

    console.log("Moving right"+this.x);
  }
  moveDown(){
    if(this.y+50<825?this.y+=50:this.y);
    console.log("Moving down"+this.y);
  }  
  
  paint () {
    const context = this.game.context;
    let image=new Image(this);
    image.src="images/char.png";
    context.save(); 
    context.drawImage(image,this.x,this.y,100,100); 
    context.restore();
  }


}