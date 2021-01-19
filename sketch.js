var fixedRect, movingRect;
var gameObj1;
function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(200,200, 50, 100);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(200, 400, 80, 50);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;

  gameObj1 = createSprite(200,600,100,50);
  gameObj1.shapeColor = "blue";
}

function draw() {
  background("black");  

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  //fixedRect.width/2 + movingRect.width/2 = movingRect.x-fixedRect.x;
  //console.log(fixedRect.width/2 + movingRect.width/2);
  //console.log(movingRect.x-fixedRect.x)

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    ){

    
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
    
  }
  
  
  bounceOff(movingRect,fixedRect);
  bounceOff(movingRect,gameObj1);
  drawSprites();
  


} 
