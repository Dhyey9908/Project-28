const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree,ground,boy,stone,slingshot;
var mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,mango9,mango10;
var mango11,mango12,mango13,mango14,mango15;

function setup() {
	createCanvas(1500,600);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(700,590,1500,25);
	tree = new Tree(1150,335);
	boy = new Boy(200,525);
	stone = new Stone(190,275,30);
	slingshot = new SlingShot(stone.body,{x:130,y:450});
	mango1 = new Mango(1070,130,30);
	mango2 = new Mango(1150,130,30);
	mango3 = new Mango(1230,130,30);
	mango4 = new Mango(1025,200,30);
	mango5 = new Mango(1100,200,30);
	mango6 = new Mango(1175,200,30);
	mango7 = new Mango(1250,200,30);
	mango8 = new Mango(1325,200,30);
	mango9 = new Mango(975,250,30);
	mango10 = new Mango(1050,250,30);
	mango11 = new Mango(1137.5,250,30);
	mango12 = new Mango(1212.5,250,30);
	mango13 = new Mango(1287.5,250,30);
	mango14 = new Mango(1355.5,250,30);
	mango15 = new Mango(1075,300,30);
}

function draw() {
  	background("Cyan");
	textSize(30);
	fill("Red");
	text("Press SpaceBar to take turn again ",500,50);
	ground.display();
	tree.display();
	boy.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	mango15.display();
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	detectCollision(stone,mango10);
	detectCollision(stone,mango11);
	detectCollision(stone,mango12);
	detectCollision(stone,mango13);
	detectCollision(stone,mango14);
	detectCollision(stone,mango15);
}


function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }

function mouseReleased() {
    slingshot.fly();
  }

function detectCollision(stone,mango){
	mbp = mango.body.position;
	sbp = stone.body.position;

	var distance = dist(sbp.x,sbp.y,mbp.x,mbp.y)
	if (distance<=mango.radius+stone.radius) {
		Matter.Body.setStatic(mango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x : 235,y : 420});
		slingshot.attach(stone.body);
	}
}