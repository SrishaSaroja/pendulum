class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    
    
  }
  
  display() {
    
    super.display();
  }
}
