var intro = 0
var litter = 1
var intro2 = 2
var gameState = 0

var bg1;
var dustbin,dustbinImg;
var banana,bananaImg

var litterScore;

var bananaG

function preload(){
  bg1 = loadImage("grass.jpg")
  dustbinImg = loadImage("dustbin.png")
  bananaImg = loadImage("banana.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  dustbin = createSprite(width/2,height-120);
  dustbin.addImage(dustbinImg)
  dustbin.scale = 0.1

  litterScore = 0;

  bananaG = new Group();
}

function draw() {

  if(gameState === intro){
    intro1();

    if(keyDown("space")){
      gameState = litter;
    }
  }

  if(gameState === litter){
    level1();
    drawSprites();

    if(litterScore === 2){
      gameState = intro2
    }
    if(gameState === intro2){
      introLevel2();
    }
  }
    
  
}