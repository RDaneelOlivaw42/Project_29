const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2;
var b1, b2, b3, b4, b5, b6, b7;
var b8, b9, b10, b11, b12;
var b13, b14, b15, b16;
var b17, b18, b19, b20, b21;
var b22, b23, b24, b25;
var shape, sling, img;
var pol;

function setup() {
  createCanvas(1450,750);
  engine = Engine.create();
  world = engine.world; 
  Engine.run(engine);

  ground1 = new Ground(510, 600, 540, 30);
  b1 = new BlueBox(300, 538, 70, 90);
  b2 = new BlueBox(370, 538, 70, 90);
  b3 = new BlueBox(440, 538, 70, 90);
  b4 = new BlueBox(510, 538, 70, 90);
  b5 = new BlueBox(580, 538, 70, 90);
  b6 = new BlueBox(650, 538, 70, 90);
  b7 = new BlueBox(720, 538, 70, 90);
  b8 = new PinkBox(370, 447, 70, 90);
  b9 = new PinkBox(440, 447, 70, 90);
  b10 = new PinkBox(510, 447, 70, 90);
  b11 = new PinkBox(580, 447, 70, 90);
  b12 = new PinkBox(650, 447, 70, 90);
  b13 = new GreenBox(440, 356, 70, 90);
  b14 = new GreenBox(510, 356, 70, 90);
  b15 = new GreenBox(580, 356, 70, 90);
  b16 = new GreyBox(510, 265, 70, 90);
  ground2 = new Ground(1070, 400, 400, 30);
  b17 = new BlueBox(930, 338, 70, 90);
  b18 = new BlueBox(1000, 338, 70, 90);
  b19 = new BlueBox(1070, 338, 70, 90);
  b20 = new BlueBox(1140, 338, 70, 90);
  b21 = new BlueBox(1210, 338, 70, 90);
  b22 = new GreenBox(1000, 247, 70, 90);
  b23 = new GreenBox(1070, 247, 70, 90);
  b24 = new GreenBox(1140, 247, 70, 90);
  b25 = new PinkBox(1070, 156, 70, 90);

  pol = new Polygon(100, 180);
  sling = new Slingshot(pol.body, {x:150, y:200});
}

function draw() {
  background(55,43,43); 
  
  ground1.display();
  ground2.display();
  b1.display(); 
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  pol.display();

  sling.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(pol.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(pol.body, {x:150, y:200});
    sling = new Slingshot(pol.body, {x:150, y:200});
  }
}