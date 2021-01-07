
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var PLAY;
var END;
var gameState=1;

function preload(){
  
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,450);
  
  monkey=createSprite(100,320,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.18;

  
  ground=createSprite(300,380,900,10);
  ground.velocityX=-8;
  ground.x=ground.width/2;
  
}

 
function draw() {
  background("skyblue")
  
    stroke("white");
  textSize(20);
  fill("white");
 text("score:"+score,70,50)
    
    
    score = score + Math.round(getFrameRate()/60);
    
    ground.velocityX = -(4+1.5/100);
  
  
   if (ground.x < 50){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
  monkey.velocityY=-12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
     
    monkey.collide(ground);
  
  obstacles();
  bananas();
  drawSprites();
}

function obstacles(){
    if (frameCount%300 === 0){

 var obstacle=createSprite(400,320,10,10);
  obstacle.addAnimation("obstacle",obstacleImage);
  obstacle.scale=0.3;
   obstacle.velocityX = -(4+1.5/300);
   obstacle.lifetime = 220;
    }
}

function bananas(){
  if ( frameCount%80===0){
 var banana=createSprite(250,200,10,10);
  banana.addAnimation("banana",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-(4+1.5/300); 
  banana.lifetime=220;
  }
}






