class Character {

  constructor(game, x,y) {
    this.game = game;
    this.x=x;
    this.y=y;
    this.image=new Image();
    this.image.src="images/char.png";
    this.score=0;
    this.direction = ""
    this.SPEED = 3
  }

  changeDirection(){
    if (this.direction === "left"){
      this.moveLeft()
    }else if(this.direction==="up"){
      this.moveUp();
    }else if(this.direction==="right"){
      this.moveRight();
    }else if(this.direction==="down"){
      this.moveDown();
    }
  }

  moveLeft(){
    if(this.x!==0 ?this.x-=this.SPEED:this.z);
    console.log("Moving Left"+this.x);
    this.image.src='images/charLeft.png';
    this.direction = "left";
  }
  moveUp(){
    if(this.y!==0?this.y-=this.SPEED:this.y);
    console.log("Moving up"+this.y);
    this.image.src='images/charUp.png';
    this.direction = "up";
  }
  moveRight(){
    if(this.x+50<=850?this.x+=this.SPEED:this.x);
    console.log("Moving right"+this.x);
    this.image.src='images/charRight.png'
    this.direction = "right";
  }
  moveDown(){
    if(this.y+50<850?this.y+=this.SPEED:this.y);
    this.image.src='images/charDown.png'
    console.log("Moving down"+this.y);
    this.direction = "down";
  }  
  
  paint () {
    const context = this.game.context;
    context.save(); 
    context.drawImage(this.image,this.x,this.y,100,100); 
    context.restore();
  }
}