class Hero{
constructor(){
this.body = Bodies.rectangle(100, 300, 40, 80);
this.width = 40;
this.height = 80;
this.image = loadImage("sprites/characterr.png")
World.add(world,this.body);
}

display(){
strokeWeight(3);
stroke("red");
fill("blue");
imageMode(CENTER);
image(this.image,0,0,this.width,this.height)

} 
}