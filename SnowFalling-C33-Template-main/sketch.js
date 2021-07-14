const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg, snowImg;
var s1;

function preload() {
  bgImg = loadImage('snow1.jpg');
  snowImg = loadImage('snow4.webp');
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //s1 = new Snowflake(400,200);
  //console.log(s1);
}

function draw() {
  background(bgImg);
  //s1.display();
  
  spawnSnow();
  drawSprites();
}

function spawnSnow (){

  if(frameCount % 60 === 0){
    var snow = createSprite(Math.round(random(20,780)),-20); 
    snow.addImage(snowImg);
    snow.scale = .15;
    snow.velocityY = 3;
    snow.lifetime = 150;
  }

}