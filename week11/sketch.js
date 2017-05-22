var seaweedone, seaweedtwo;

function preload() {
    seaweedone = loadAnimation("assets/seaweed0001.png", "assets/seaweed0002.png");
  

    seaweedtwo = loadAnimation("assets/seaweedone.png", "assets/seaweedtwo.png");
}

function setup() {
  createCanvas(800,300);
}

function draw() {
  background(255,255,255);  

  animation(seaweedone, 300, 150);
  animation(seaweedtwo, 500, 150);
}