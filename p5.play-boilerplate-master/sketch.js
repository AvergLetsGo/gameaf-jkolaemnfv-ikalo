function preload(){
BG = loadImage("space.jpg")
UFO = loadImage("ufo.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  BGI = createSprite(400, 200, width, height);
  BGI.addImage("star", BG)
  BGI.scale = 4
  ufo = createSprite(400, 200, 100, 100)
  ufo.addImage("ufoi", UFO)
  ufo.scale = 0.1;
  Edges = createEdgeSprites()
}

function draw() {
  background(255,255,255);  
  if(keyDown(RIGHT_ARROW)){
    ufo.x = ufo.x + 10
  }
  if(keyDown(LEFT_ARROW)){
    ufo.x = ufo.x - 10
  }
  if(keyDown(UP_ARROW)){
    ufo.y = ufo.y - 10
  }
  if(keyDown(DOWN_ARROW)){
    ufo.y = ufo.y + 10
  }
  SpawnDeath();
  drawSprites();
}


function SpawnDeath(){
if(frameCount % 10 === 0){
  var death = createSprite(random(0, windowWidth), random(0, windowHeight), 25, 25)
 death.shapeColor = "red"
death.bounceOff(Edges);
death.bounceOff(death);
death.velocityX = (random())
death.velocityY = (random())
}





}
