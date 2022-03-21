var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var nube
var nube1
var o1
var o2
var o3
var o4
var o5
var o6
var puntuacion=0
var grupoCaptus
var grupoNubes
var play
var end
var gameState=play;





function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  o1=loadImage("obstacle1.png");
  o2=loadImage("obstacle2.png");
  o3=loadImage("obstacle3.png");
  o4=loadImage("obstacle4.png");
  o5=loadImage("obstacle5.png");
  o6=loadImage("obstacle6.png");
  groundImage = loadImage("ground2.png");
  nube1=loadImage("cloud.png");
 
  
}

function setup() {

  createCanvas(600,200)
  grupoNubes=new Group();
  grupoCaptus=new Group();
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generar números aleatorios
  var rand =  Math.round(random(20,60))
  //console.log(rand)

}

function draw() {
  //establecer color de fondo
  background(180);
  text("puntos "+puntuacion,500,50);
  //console.log(trex.y)
  if (gameState===play){
    if(keyDown("space")&& trex.y >= 100) {
      trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    //piso infinito
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  //evitar que el trex caiga
  trex.collide(invisibleGround);
  //aparecer nubes
  nubesAleatorias();
  cactus();
  puntuacion=puntuacion+Math.round(frameCount/60)
  if (grupoCaptus.isTouching(trex)){
    gameState=end;
  }
}//este corchete cierra el play.
  
  else if (gameState===end){
ground.velocityX=0;
  }
  
  
  
  
  
  
  
  
  
  
  
  console.log(cactus.x);
  drawSprites();
 // console.log(frameCount)
}
//función para aparecer las nubes
function nubesAleatorias(){
  if(frameCount%80===0){
  nube=createSprite(600,100,40,10);
  nube.velocityX=-3
  grupoNubes.add(nube);
  nube.addImage(nube1)
  nube.scale=0.8
   nube.x=Math.round(random(400,600))
   //console.log(nube.depth)
   nube.depth=trex.depth;
   trex.depth=trex.depth+1
   nube.lifetime=200
 //escribir aquí el código 
  }
}


function cactus(){
if (frameCount%60===0){
  var cactus=createSprite(400,165,10,40);
  cactus.velocityX=-6
  grupoCaptus.add(cactus);
  cactus.lifetime=200
  var rand=Math.round(random(1,6));
  switch(rand){
    case 1:cactus.addImage(o1);
    break;
    case 2:cactus.addImage(o2);
    break;
    case 3:cactus.addImage(o3);
    break;
    case 4:cactus.addImage(o4);
    break;
    case 5:cactus.addImage(o5);
    break;
    case 6:cactus.addImage(o6);
    break;
    default:break;
  }
cactus.scale=0.5
}
}
