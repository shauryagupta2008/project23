
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var helicopter;
var World;
var paperobj;
var redzone;

function setup(){
    createCanvas();
    rectMode(CENTER);


    engine = Engine.create();
    World = engine.world;
    boxobj=new box(100,300,50);
    redzoneObject=new ground(width/5,250,width,20);
    helicopter= new helicopter(200,300);

   Engine.run(engine);

   

}


function draw(){
    rectMode(CENTER)
    background(140);


    redzoneObject.display();
    boxObject.display();
    helicopter.display();
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
  helicopterSprite.x=helicopterSprite.x-20;
}
}
if (keyCode === down_ARROW){
    Matter.body.setStatic(packageBody,false);
}