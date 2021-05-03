
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hero1,backgroundImg,enemy,ground;
var engine,world;

function preload()
{
backgroundImg=loadImage("sprites/game background.jpg")
}

function setup() {
	createCanvas(displayWidth, displayHeight)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   hero1 = new Hero(width-400,height/2,200,200)
   enemy = new Enemy(width-200,height/2,200,200)
   ground = new Ground(width/2,height,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine)
 background(backgroundImg)
 
  hero1.display();
  ground.display();
  enemy.display();
 


 

 drawSprites();

}



