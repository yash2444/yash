const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var ground1,mango1, tree1, stone1, maonj;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new Tree(700,420,400,530);
	ground1 = new Ground(400,670,800,30);
	stone = new Stone(200,600,30);
	mango1 = new Fruit(700,300,30,30);
	boy1 = new Player(stone.body,{x:235, y:420});
	console.log(stone)

	 Engine.update(engine)
}
function draw() {
	background(255);
  rectMode(CENTER);
  tree1.display();

 ground1.display();
mango1.display();
stone.display();
boy1.display();
 
}   
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy1.fly();
}