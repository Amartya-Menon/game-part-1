class Support{
    constructor(){
    this.body = Bodies.rectangle(700, 300, 40, 80);
    this.width = 40;
    this.height = 80;
    
    World.add(world,this.body);
    this.image = loadImage("sprites/support.jpg")
    }
    
    display(){
    strokeWeight(3);
    stroke("blue");
    fill("red");
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
    }
    
    
    
    }