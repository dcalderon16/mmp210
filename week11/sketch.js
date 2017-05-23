//mouse click or x to SWIM

var GRAVITY = .3;
var SWIM = -7;
var GROUND_Y = 450;
var MIN_OPENING = 300;
var fish, ground;
var urchins;
var gameOver;
var fishImg, urchinAni, groundImg, bgImg;


function setup() {
  createCanvas(400,600);

  fishImg = loadImage("assets/fish.png");
  urchinAni = loadAnimation("assets/seaweed.png", "assets/seaweed2.png");
  groundImg = loadImage("assets/ground.png");
  bgImg = loadImage("assets/background.png");
  
  fish = createSprite(width/2, height/2, 40,40);
  fish.rotateToDirection = true;
  fish.velocity.x = 4;
  fish.setCollider("circle", 0,0,20);
  fish.addImage(fishImg);

  ground = createSprite(800/2, GROUND_Y+100);
  ground.addImage(groundImg);

  urchins = new Group();
  gameOver = true;
  updateSprites(false);
  
  camera.position.y = height/2;
}

function draw() {

  if(gameOver && keyWentDown("x"))
    newGame();

  if(!gameOver) {

    if(keyWentDown("x"))
      fish.velocity.y = SWIM;
    
    fish.velocity.y += GRAVITY;
    
    if(fish.position.y<0)
      fish.position.y = 0;
    
    if(fish.position.y+fish.height/2 > GROUND_Y)
      die();

    if(fish.overlap(urchins))
      die();

    //spawn urchins
    if(frameCount%60 == 0) {
      var urchinH = random(50, 300);
      var urchin = createSprite(fish.position.x + width, GROUND_Y-urchinH/2+1+100, 80, urchinH);
      urchin.addAnimation(urchinAni);
      urchins.add(urchin);

      //top urchin
      if(urchinH<200) {
        urchinH = height - (height-GROUND_Y)-(urchinH+MIN_OPENING);
        urchin = createSprite(fish.position.x + width, urchinH/2-100, 80, urchinH);
        urchin.mirrorY(-1);
        urchin.addAnimation(urchinAni);
        urchins.add(urchin);
      }
    }

    //get rid of passed urchins
    for(var i = 0; i<urchins.length; i++)
      if(urchins[i].position.x < fish.position.x-width/2)
        urchins[i].remove();
  }

  camera.position.x = fish.position.x + width/4;

  //wrap ground
  if(camera.position.x > ground.position.x-ground.width+width/2)
    ground.position.x+=ground.width;

  background("#2544AB"); 
  camera.off();
  image(bgImg, 0, GROUND_Y-190);
  camera.on();

  drawSprites(urchins);
  drawSprite(ground);
  drawSprite(fish);
}

function die() {
  updateSprites(false);
  gameOver = true;   
}

function newGame() {
  urchins.removeSprites();
  gameOver = false;
  updateSprites(true);
  fish.position.x = width/2;
  fish.position.y = height/2;
  fish.velocity.y = 0;
  ground.position.x = 800/2;
  ground.position.y = GROUND_Y+100;
}

function mousePressed() {
  if(gameOver)
    newGame();
  fish.velocity.y = SWIM;
}