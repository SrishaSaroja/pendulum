const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(600,20,200,20);
    platform = new Ground(950, 305, 300, 170);
    bird = new Bird(100,100,mouseX,mouseY);
   // box1 = new Box(950,105,20,40);
    //box2 = new Box(950,65,20,40);
    //box3 = new Box(970,105,20,40);
    //box4 = new Box(930,105,20,40);
    //box5 = new Box(910,105,20,40);
    //box6 = new Box(970,65,20,40);
    //box7 = new Box(930,65,20,40);
    //box8 = new Box(990,105,20,40);
    //box9 = new Box(950,25,20,40);

   // log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:600,y:20});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground1.display();
    ground2.display();
    bird.display();
    slingshot.display();
    //box3.display();
    //platform.display();
    //box1.display();    
    //box2.display();
    //box4.display();
    //box5.display();
    //box6.display();
    //box7.display();
    //box8.display();
    //box9.display();
}

