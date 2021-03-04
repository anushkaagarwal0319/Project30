
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function preload(){

  polygonImg = loadImage("polygon.png");

}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
  ground = new Ground(650, 590, 1300, 40)
	Engine.run(engine);

  base1 = new Ground(450, 450, 300, 20)
  base2 = new Ground(955, 300, 200, 20)

  //bottom row
  block1 = new Block(360, 235, 30, 40);
  block2 = new Block(390, 235, 30, 40);
  block3 = new Block(420, 235, 30, 40);
  block4 = new Block(450, 235, 30, 40);
  block5 = new Block(480, 235, 30, 40);
  block6 = new Block(510, 235, 30, 40);
  block7 = new Block(540, 235, 30, 40);

  //second row
  fill("pink")
  block8 = new Block(390, 195, 30, 40);
  block9 = new Block(420, 195, 30, 40);
  block10 = new Block(450, 195, 30, 40);
  block11= new Block(480, 195, 30, 40);
  block12= new Block(510, 195, 30, 40);

  //third/top row
  block13 = new Block(420, 155, 30, 40);
  block14 = new Block(450, 155, 30, 40);
  block15 = new Block(480, 155, 30, 40);

  block16 = new Block(450, 105, 30, 40);

  //second structure- bottom row
  block17 = new Block(890, 200, 30, 40);
  block18 = new Block(920, 200, 30, 40);
  block19 = new Block(950, 200, 30, 40);
  block20 = new Block(980, 200, 30, 40);
  block21 = new Block(1010, 200, 30, 40);

  //second row/top
  block22 = new Block(920, 160, 30, 40);
  block23 = new Block(950, 160, 30, 40);
  block24 = new Block(980, 160, 30, 40);
  block25 = new Block(950, 120, 30, 40);

  //creating polygon holder with slings
  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShot = new Slingshot(this.polygon, {x:100, y:200});

}

function draw() {

  background(50);
  //Add code for displaying text here
  fill("white");
  textSize(20);
  textFont("Georgia");
  text("DRAG THE HEXAGONAL STONE AND RELEASE IT TO LAUNCH IT TOWARD THE BLOCKS", 230, 100);
  textSize(15);
  text("PRESS THE SPACE KEY TO GET A SECOND CHANCE TO PLAY!", 830, 550);

  ground.display();
  base1.display();
  base2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();

  imageMode(CENTER)
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingShot.attach(this.polygon);
  }
}
