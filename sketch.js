var bullet ,wall ;
var weight , speed;
var thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed   = random(223,321);
  
  bullet   =  createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255); 

  wall  =  createSprite(1000,200,thickness,400 );
  wall.shapeColor = color(80,80,80);
  wall.shapeColor = color(255); 


  weight  = random(30,52);

}

function draw() {
  background("black"); 
  
  if(collide(wall,bullet) == true){

    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness ;
    
    bullet.velocityX = 0 ; 

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
    
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
  }


  drawSprites();
}


