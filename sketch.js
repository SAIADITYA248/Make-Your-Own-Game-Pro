
var fighter  , JetImage;
var planes,planesImage;
var missile, missileImage;
var blast;
var backgroundImage;
var missileGroup,planesGroup;  
var gameState, PLAY=1,END=0;     
var gameState=PLAY ;
var score=0;

function preload(){
  JetImage=loadImage("./images/Fighter Jet1.png");
  planesImage=loadImage("./images/EnemyPlane.png");
  missileImage=loadImage("./images/Missile1.png");
backgroundImage=loadImage("./images/BackgroundImage.jpg");
blast=loadImage("./images/blast.png");
explosion=loadSound("./images/explosion.mp3");
}

function setup(){
createCanvas(2800,700);

fighter=createSprite(400,650);
fighter.addImage(JetImage);
fighter.scale=0.2



missileGroup=new Group();
planesGroup=new Group();  




}

function draw(){
 

if(gameState===PLAY){

  background(backgroundImage);
  background.scale=1.7
 

if (keyDown("space")) {
  createMissile();
 }
if(keyDown("left_Arrow")){
 fighter.x=fighter.x-10;
}


if(keyDown("right_Arrow")){
 fighter.x=fighter.x+10;


}
if(missileGroup.isTouching(planesGroup)){
explosion.play();
   planesGroup.destroyEach();
  missile.addImage(blast);
  missileGroup.destroyEach;
  
 missileGroup.setVelocityEach(0,0);
   
   score=score+1

}
if(fighter.isTouching(planesGroup)){
fighter.destroy();
planesGroup.destroyEach();
gameState=END;

}





enemyPlanes();


drawSprites();
textSize(24);
text("Score:"+score,680,50);


}
else if(gameState===END){
  background(0);
   //stroke("yellow");
   fill("yellow");
   textSize(30);
   text("Game Over", 340,200)
  

}


}

function createMissile(){
  missile=createSprite(400,300);
  missile.addImage(missileImage);
  missile.setCollider("rectangle",0,0,300,200);
 //missile.debug=true; 
  missile.x=fighter.x;
  missile.y=fighter.y-60
  missile.velocityY=-3;
  missile.scale=0.07;
missile.lifetime=60
missileGroup.add(missile);
}

function enemyPlanes(){
  if (frameCount%100===0){
  
  
  planes=createSprite(400,20);
  planes.velocityY=4
  planes.addImage(planesImage); 
  planes.scale=0.5
  planes.x=Math.round(random(100,1500))
  planes.lifetime=200;
  planesGroup.add(planes);
  fighter.depth=planes.depth+1
  
  }
}


