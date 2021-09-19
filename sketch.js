const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane; 
var hierro; 
var stone;
var rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    hierro = new Hierro(300,520);
    stone = new Stone(700,520);
    rubber = new Rubber(900,520,60,60);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    

    plane.display();
    hammer.display();
    hierro.display();
    stone.display();
    rubber.display();

    
 
}