//the instructions on the project info didn't say anything about what to do after you created the obstacles and banana's, so I'll just submit it for now and wait for your feedback.
var monkey, monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var ground;
function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400)
  FoodGroup = createGroup();
  ObstacleGroup = createGroup(); 
  monkey = createSprite(100,300,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  monkey.velocityY=0;
  //ground
  ground = createSprite(300,400,600,10);
     score = 0;

}
function draw() {
background("white");
   if(keyWentDown("space") && monkey.y>350){
    monkey.velocityY=-15;
  } else{
    monkey.velocityY=monkey.velocityY+1;
  }
  monkey.collide(ground);
  console.log(score);
  bananaSpawn();
  obstacleSpawn();
  drawSprites(); 
  score = score + Math.round(getFrameRate()/60);
  textSize(15);
  text("Survival Time: "+ score, 450,50);
}
function bananaSpawn(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,0,10,10);
    banana.y = Math.round(random(370,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX=-2;
    banana.lifetime = 300;
    FoodGroup.add(banana);
  }
}
function obstacleSpawn(){
 if(frameCount%300 === 0){
  obstacle = createSprite(600,390,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-6;
  ObstacleGroup.add(obstacle);
   
 }
}


