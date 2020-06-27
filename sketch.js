var  wall,thickness ;
var bullet, speed, weight;

function setup() {

  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

 
    bullet = createSprite(400, 200, 50, 50);
    bullet.velocityX=speed;
    bullet.shapeColor="black";


   thickness.random(22,83)
    wall = createSprite(1500,200,60,height/2);
    wall.shapeColor="black";
}
    


function draw() {
 
    background(255,255,255);

    if (hasCollided(bullet, wall)) {
      bullet.velocityX=0;
      var damage = 0.5 * weight * speed * speed/ (thickness*thickness*thickness);

      if(damage>10) {
        wall.shapeColor="red";
      }
      if(damage<10) {
        wall.shapeColor="green";
      }
    }

    
 
  drawSprites();
}
function hasCollided(lbullet,lwall) {
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge) {
  return true;
}
return false;

}