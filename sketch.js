const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
Body = Matter.Body;

var engine, world;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,
a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,
a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,
a31,a32;

 function setup() {
  var canvas=createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

    a1 = new Raindrop();
    a2= new Raindrop();
    a3 = new Raindrop();
    a4= new Raindrop();
    a5 = new Raindrop();
    a6= new Raindrop();
    a7 = new Raindrop();
    a8= new Raindrop();
    a9 = new Raindrop();
    a10= new Raindrop();
    a11 = new Raindrop();
    a12= new Raindrop();
    a13 = new Raindrop();
    a14= new Raindrop();
    a15 = new Raindrop();
    a16= new Raindrop();
    a17 = new Raindrop();
    a18= new Raindrop();
    a19 = new Raindrop();
    a20= new Raindrop();
    a21= new Raindrop();
    a22= new Raindrop();
    a23 = new Raindrop();
    a24= new Raindrop();
    a25 = new Raindrop();
    a26= new Raindrop();
    a27 = new Raindrop();
    a28= new Raindrop();
    a29= new Raindrop();
    a30= new Raindrop();
    a31 = new Raindrop();
    a32= new Raindrop();

}

function draw() {
  background(0);  

  Engine.update(engine);


  text(mouseX + ',' + mouseY, 10, 15);

  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  a7.display();
  a8.display();
  a9.display();
  a10.display();
  a11.display();
  a12.display();
  a13.display();
  a14.display();
  a15.display();
  a16.display();
  a17.display();
  a18.display();
  a19.display();
  a20.display();
  a21.display();
  a22.display();
  a23.display();
  a24.display();
  a25.display();
  a26.display();
  a27.display();
  a28.display();
  a29.display();
  a30.display();
  a31.display();
  a32.display();

  

}