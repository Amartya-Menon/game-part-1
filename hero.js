class Hero{
constructor(x,y,width,height){
 this.body = Bodies.rectangle(x, y,width,height);
 this.width = width;
 this.height = height;

World.add(world,this.body);
this.image = loadImage("sprites/hero.png")

}
heal(){
heroHealth += 20

}
display(){

imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

} 
}