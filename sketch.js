var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
 demoobj= createSprite(500,300,40,100);
 demoobj.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(istouching(movingRect,demoobj))
{movingRect.shapeColor="red";
demoobj.shapeColor="red";
}
else{movingRect.shapeColor="green";
demoobj.shapeColor="blue";
}

  drawSprites();
}

