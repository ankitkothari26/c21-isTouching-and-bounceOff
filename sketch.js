
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 gameObject1=createSprite(100,200,80,30);
 gameObject1.velocityX=5;
 gameObject2=createSprite(800,200,80,80);
 gameObject2.velocityX=-5;

 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject1,movingRect)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject1.shapeColor = "green"
  }
 

bounceOff(gameObject1,gameObject2)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}
function bounceOff(object1,object2){
  if(object1.x-object2.x <object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2){
object1.velocityX=object1.velocityX*(-1);
object2.velocityX=object2.velocityX*(-1);
    }
    if(object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2){
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1); 

    
    }
  }

