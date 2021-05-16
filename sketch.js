const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var divisions=[];
var ground;


var rowsHeight = 150;

function setup() {

  
  createCanvas(600,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

for(var k = 0; k <=width; k = k+80)
{
    divisions.push(new Divisions(k, height-rowsHeight/2, 10, rowsHeight));
}

  for(var j = 40; j<= width; j = j+50)
  {
    plinkos.push(new Plinko(j, 55))
  }

  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j,85))
  }

  for(var j = 40; j<= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,120))
  }

  for(var j = 15; j<= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,150))
  }

  for(var j = 40; j<= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,185))
  }

  for(var j = 15; j<= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,225))
  }
  
  for(var j = 40; j<= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,265))
  }

  for(var j = 15; j<= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,305))
  }
}

function draw() {
  background(0);

  if(frameCount % 60 === 0)
  {
    particle.push (new Particle(random(width/2-10, width/2+10),10,10));
  }

  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++)
  {
    particles[i].display();
  }

  for(var k = 0; k<divisions.length;k++)
  {
    divisions[k].display();
 }

  for(var j = 0; j<plinkos.length;j++)
{
    plinkos[j].display();
 }

 ground.display();
 drawSprites();
}
