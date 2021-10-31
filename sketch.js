
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   ground = new Ground(100,100,30,50)
   ground2 = new Ground(100,200,40,50)
   ground3 = new Ground(100,200,100,60)
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);



  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ground.display()
  ground2.display()
  ground3.display()
  

  angle +=0.1;

 

  ellipse(ball.position.x,ball.position.y,20);

 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  