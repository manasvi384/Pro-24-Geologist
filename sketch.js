const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron;
var rubberBall1, rubberBall2;
var stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    iron = new Iron(600, 400);
    rubberBall1 = new Rubber(300, 400, 50);
    rubberBall2 = new Rubber(390, 400, 30);
  
    stone = new Stone(500, 400);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    
    plane.display();
    hammer.display();
    iron.display();
    rubberBall1.display();
    rubberBall2.display();
    stone.display();
    
 
}