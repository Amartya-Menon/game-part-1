const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var PLAY=1
var PAUSE=2
var END=0
var gameState = PLAY;
var hero1,backgroundImg,enemy,ground;
var engine,world;
var heroHealth=100;
var enemyHealth=100;
var supportHealth=0,counter=0;
var attack,heal;
function preload()
{
backgroundImg=loadImage("sprites/game background.jpg")
}

function setup() {
	createCanvas(displayWidth, displayHeight)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
   hero1 = new Hero(100,height/2,350,205)
   enemy = new Enemy(1180,height/2,350,200)
   ground = new Ground(width/2,height-200,width,10)

   //element = createElement("attack") 
   heroAtt = createButton("attack");
   heroAtt.position(50,510);
   
  
  heroDef = createButton("defend")
  heroDef.position(300,510)
  
  
  heroSp = createButton("special")
  heroSp.position(550,510)
  
  
  heroHeal = createButton("heal")
  heroHeal.position(800,510)
  
 
  
   //  ground = createSprite(width/2,height-200,width,10)
 //  ground.visible = false
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine)
  background(backgroundImg)
  noStroke();
  textSize(20)
  fill(0)
  text("health :" + heroHealth   ,50, 340)
  text("health :" + enemyHealth , 1170, 340)
  text("healCount :" + counter,50,100)
  hero1.display();
  //ground.display();
  enemy.display();
  heroAtt.mousePressed(hero1.attack)
  heroDef.mousePressed(hero1.defend)
  heroSp.mousePressed(hero1.Sp) 
  
  
  
  if(heroAtt.mousePressed() && gameState === "PLAY"){
   
    hero1.attack;
    gameState = "PAUSE";
    heroAtt.disabled = true;
  }
  if(gameState === "PAUSE"){
    enemy.attack;
    gameState = "PLAY";
    heroAtt.disabled = true;
  }
  
 if(mousePressedOver(heroHeal) && counter<3){
    counter++;
    hero1.heal();
  }
  if(counter === 3){
    heroHeal.disabled = true;
  }


 drawSprites();


 




 



}


