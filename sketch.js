var gameState=1;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var score=0 ;
function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
 
  ground = createSprite(1,360,800,10);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
// ground.addAnimation("monkey",monkey_running);
//  ground.scale = 0.1;
  monkey = createSprite(100,235,30,30);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  
  //stone = createSprite(300,340,30,30);
 //stone.addAnimation("stone",obstaceImage);
 // stone.scale = 0.1;
 // if (stone.x < 0){
     // stone.x = stone.width/2;
   // }
  
 // banana = createSprite(300,150,30,30);
  //banana.addAnimation("stone",bananaImage);
  //banana.scale = 0.1;
  
  invisibleGround = createSprite(0,345,400,10);
  invisibleGround.visible = false; 
  
 // createEdgeSprites();
 // monkey.collide(invisibleGround);
  
  
  
  stoneGroup = createGroup();
  bananaGroup = createGroup();
  
  score=0
  monkey.setCollider("circle",0,0,40);
  monkey.debug = false

score = 0
}


function draw() {
background("lightBlue");
  
  text("Score: " + score,300, 50 );

  
  
 

 if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
      score=score+2;
    }

if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13;
   
//monkey.collide(invisibleGround);
}
    
    
   monkey.velocityY = monkey.velocityY + 0.8

monkey.collide(invisibleGround);
spawnBanana();
spawnStone();

 drawSprites();
}
 function spawnBanana(){
  
  if(frameCount % 100 === 0){
  var banana = createSprite(600,100,40,10)
  
  banana.y= Math.round(random(100,200))
  banana.velocityX=-2
 banana.addImage("banana",bananaImage);
  banana.scale=0.1
 
  }
 }
function spawnStone(){
  
  if(frameCount % 150 === 0){
  var Stone = createSprite(600,100,40,10)
  
  Stone.y= Math.round(random(340,340))
  Stone.velocityX=-2
Stone.addImage("stone",obstaceImage);
  Stone.scale=0.1
 
  }
 }