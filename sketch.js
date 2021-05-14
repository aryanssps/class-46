var harry,harry_Img;
var bg_Img;
var flag,flag_Img
var goldball,goldball_Img,goldBallGroup;
var blackball,blackball_Img,blackBallGroup;
var edges;
var harryscore=0,drakescore=0,trophy,trophy_Img;
var sign,sign_Img;
var sign2,sign2_Img;
var PLAY=1,END=0;
var gameState=PLAY
var reset,reset_Img;

function preload(){
  harry_Img=loadImage("potter.png")
  bg_Img=loadImage("bg.jpg")
  flag_Img=loadImage("hogwartsFlag.png")
  goldball_Img=loadImage("goldball.png")
  trophy_Img=loadImage("trophy.png")
  sign_Img=loadImage("sign.png")
  sign2_Img=loadImage("sign2.png")
  blackball_Img=loadImage("blackBall2.png")
  reset_Img=loadImage("reset.png")
}

function setup(){
  
  createCanvas(1350,700);
 
  harry=createSprite(100,100,50,50)
  harry.addImage(harry_Img)
  harry.scale=0.28
  
  flag=createSprite(560,40,50,50)
  flag.addImage(flag_Img)
  flag.scale=0.08
  
  trophy=createSprite(300,90,50,50)
  trophy.addImage(trophy_Img)
  trophy.scale=0.1
  trophy.visible=false;
  
  sign=createSprite(50,200,50,50)
  sign.addImage(sign_Img)
  sign.scale=0.1
  sign.visible=false;
  
  sign2=createSprite(50,200,50,50)
  sign2.addImage(sign2_Img)
  sign2.scale=0.1
  sign2.visible=false;
  
    reset=createSprite(250,400,50,50)
  reset.addImage(reset_Img)
  reset.scale=0.2
  reset.visible=false;
  
  goldBallGroup=new Group();
  blackBallGroup=new Group();
  edges=createEdgeSprites();
}


function draw(){
  background(bg_Img)
   push()
   
   fill(0)
   textSize(20)
   textAlign("CENTER")
   text("WELCOME TO QUIDITCH MATCH",600,20)
   pop ();
  fill (0)
  textSize(20)
  text("HarryScore:"+harryscore,370,20)
  text("DrakeScore:"+drakescore,970,20)
  
  flag.visible=true

  if(keyDown("space")){
    gameState=PLAY
    
  }
  
  if(gameState===PLAY){
    
    harry.y=mouseY
    harry.x=mouseX

    flag.visible=false;

    if(harry.isTouching(goldBallGroup)){
    harryscore++
    goldBallGroup.destroyEach();
  }
    
  if(harry.isTouching(blackBallGroup)){
    drakescore++
    blackBallGroup.destroyEach();
  }
     
  if(harryscore===10){
    
    gameState=END
  }
    
    if(drakescore===10){
      gameState=END
  }
  }
  
  else if(gameState===END){
    
    harry.x=70
    harry.y=200

    flag.visible=true;

    if(harryscore===10){
    trophy.visible=true;
    sign.visible=true;
    fill("red")
    textSize(30)
    text("GREYINFIDOR WIN!!!",200,250)
    }
    
    else if(drakescore===10){
   // stroke("red")
    fill("red")
    textSize(30)
    text("SLYTHERIAN WIN!!!",200,200)
    trophy.visible=true;
    sign2.visible=true;
  }
  
    reset.visible=true;
    blackBallGroup.setLifetimeEach(-8);                          
     goldBallGroup.setLifetimeEach(-7);
     blackBallGroup.destroyEach();
    goldBallGroup.destroyEach();
     blackBallGroup.setVelocityXEach(0);
     goldBallGroup.setVelocityXEach(0);
     blackBallGroup.setVelocityYEach(0);
     goldBallGroup.setVelocityYEach(0);
   
  }
 
  
  createEdgeSprites();
  
  spawnBalls();
  
  
  goldBallGroup.bounceOff(edges)
  blackBallGroup.bounceOff(edges)
 
     
     
  
  
  
  
 drawSprites();
  
}

function spawnBalls(){
  if(frameCount%100===0){
     goldball=createSprite(700,100,50,50)
     goldball.addImage(goldball_Img)
     goldball.scale=0.15
     goldball.velocityX=Math.round(random(8,-7))
     goldball.velocityY=Math.round(random(7,-8))
     goldball.lifetime=70
     goldball.x=Math.round(random(200,400))
     goldball.y=Math.round(random(50,200))
     goldBallGroup.add(goldball)
    
     }
    if(frameCount%50===0){
     blackball=createSprite(800,100,50,50)
     blackball.addImage(blackball_Img)
     blackball.scale=0.08
     blackball.velocityX=Math.round(random(6,-7))
     blackball.velocityY=Math.round(random(7,-9))
     blackball.lifetime=50
     blackball.x=Math.round(random(250,450))
     blackball.y=Math.round(random(70,220))
     blackBallGroup.add(blackball)
    
     }
}
 