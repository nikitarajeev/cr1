
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,side0,side1,side2;

function preload(){
   
}

function setup() {
	createCanvas(800, 700);
 
   
	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100, 600,20,30);

	ground =  createSprite(400, 680, 800, 20);
	side0 =  createSprite(550, 620, 20, 100);
	side1 =  createSprite(635, 660, 150, 20);
	side2 =  createSprite(720, 620, 20, 100);


	Engine.run(engine);
 
}


function draw() {

	background("yellow");
	rectMode(CENTER);
 

 // Engine.update(engine);

 paper.display();

 ground.display();

 side0.display();
 side1.display();
 side2.display();

 drawSprites();

}

function keyPressed(){
   if(keyCode === UP_ARROW)  {
	  Matter.Body.applyForce(paper.body, paper.body.position, 
		  {x:15, y: -15})
   }

 }
