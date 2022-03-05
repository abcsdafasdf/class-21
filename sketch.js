const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground1,ground2,ground3,ground4
var ball
var btn1,btn2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground1 = new Ground(200,390,400,20)
  ground2 = new Ground(200,10,400,20)
  ground3 = new Ground(9,200,20,400)
  ground4 = new Ground(390,200,20,400)
  var ball_options ={
    restitution:0.95,
    frictionAir:0.01,
  }
  ball = Bodies.circle(100,10,20,ball_options)
  World.add(world,ball)
  btn1 = createImg("push.png")
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(hForce)
  btn2 = createImg("up.png")
  btn2.position(20,30)
  btn2.size(50,50)
  btn2.mouseClicked(vForce)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ellipse(ball.position.x,ball.position.y,20,20)
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}
