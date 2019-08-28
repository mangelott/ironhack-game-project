class Character {

  constructor(game, x,y) {
    this.game = game;
    this.x=x;
    this.y=y;
    this.image=new Image();
    this.image.src="images/char.png";
    this.score=0;
    this.direction = ""
    this.SPEED = 5
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

  placeFruit(){
    this.fruit=new Fruit();
    this.score++;
    this.SPEED+=3;
  }

  moveLeft(){
    this.image.src='images/charLeft.png';
    this.direction = "left";
    if(this.x==0?this.x:this.x-=this.SPEED);
  }
  moveUp(){
    this.image.src='images/charUp.png';
    this.direction = "up";
    if(this.y!==0?this.y-=this.SPEED:this.y);
  }
  moveRight(){
    this.image.src='images/charRight.png'
    this.direction = "right";
    if(this.x+50<=850?this.x+=this.SPEED:this.x);
    }
  
  moveDown(){
    this.image.src='images/charDown.png'
    this.direction = "down";
    if(this.y+50<850?this.y+=this.SPEED:this.y);
  }  
  
  paint () {
    const context = this.game.context;
    context.save(); 
    console.log(`Moving ${this.direction}: ${this.x} | ${this.y}`);
    if(this.x+50==this.game.fruit.x&& this.y+50==this.game.fruit.y?this.game.fruit.setRandomPosition():console.log("Searching"));
    context.drawImage(this.image,this.x,this.y,100,100); 
    context.restore();
  }
}