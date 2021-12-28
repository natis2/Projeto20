
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() {
	createCanvas(700, 800);
	

	engine = Engine.create();
	world = engine.world;
	//Crie os Corpos Aqui.
    block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,Block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,Block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,Block3);
	
	
     
	Engine.run(engine);
  
	var plane_options= {
		isStatic: true
	};

var block1_options = {
	restitution: 0.5,
	friction = 0.02,
	frictionAir: 0
}
var block2_options = {
	restitution: 0.7,
	friction: 0.01,
	frictionAir: 0.1
}
var block3_options = {
	restitution: 0.01,
	friction: 0.01,
	frictionAir: 0.3

}
}


function draw() {
  Engine.update(engine);
	rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ellipse(block1.position.x,block1.position.y,20);
  rect(block2.position.x,block2.position.y,20);
  rect(block3.position.x,block3.position.y,40);
}



