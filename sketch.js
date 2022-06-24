var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ob1, ob2, ob3 ,ob4, ob5, ob6;

function preload() {    
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    cloudimage = loadImage ("cloud.png")
    ob1 = loadImage ("obstacle1.png")
    ob2 = loadImage ("obstacle2.png")
    ob3 = loadImage ("obstacle3.png")
    ob4 = loadImage ("obstacle4.png")
    ob5 = loadImage ("obstacle5.png")
    ob6 = loadImage ("obstacle6.png")
}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    invisibleGround=createSprite (200,190,400,10)
    invisibleGround.visible=false
}

function draw() {
    background("yellow");
    //jump when the space button is pressed
    if (keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);
    spawnClouds()
    spawnObstacles()
    drawSprites();
}
function spawnClouds()
{
    if(frameCount % 60===0){
    clouds=createSprite(600,100,40,10);
    clouds.velocityX=-3
    clouds.addImage(cloudimage)
    clouds.scale=0.2
    clouds.y=Math.round(random(10,60))
    clouds.depth=trex.depth
    trex.depth=trex.depth+1
    clouds.lifetime=200
}
}
function spawnObstacles()
{
    if(frameCount % 60===0){
        var obstacle=createSprite(600,165,10,40);
        obstacle.velocityX=-6
}
var rand=Math.round(random(1, 6))
switch(rand){
    case 1: obstacle.addImage(ob1);
           brake;
           case 2: obstacle.addImage(ob2);
           brake;
           case 3: obstacle.addImage(ob3);
           brake;
           case 4: obstacle.addImage(ob4);
           brake;
           case 5: obstacle.addImage(ob5);
           brake;
           case 6: obstacle.addImage(ob6);
           brake;
default: brake;
}
obstacle .lifetime=300
}
