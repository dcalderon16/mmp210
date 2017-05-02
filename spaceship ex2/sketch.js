//spaceships and arrays
var numSpaceships = 15;
var xPositions = [];
var yPositions = [];
var spaceshipSize = [];
var spaceshipSpeed = [];
    

function setup() {
    createCanvas(720, 360);

    for (var i = 0; i < numSpaceships; i++) {
        xPositions[i] = random(0, width);
        yPositions[i] = random(0, height);
        spaceshipSize[i] = random (10, 50);
        spaceshipSpeed[i] = random(0.1, 20)
    }
}

function draw() {
    background('black');
    
    //draw a spaceship
    var x = 0;
    var y = 120;
    var spaceshipWidth = 200;
    var spaceshipHeight = spaceshipWidth/4;
    var spaceshipWing = spaceshipWidth/3;
    var wingMargin = 20;
    var cockpitWidth = spaceshipWidth/3
    
    // wing 1
    triangle(x, y - spaceshipWing, x, y + spaceshipHeight + spaceshipWing, x + spaceshipWidth, y + spaceshipHeight/2);

    //wing 2
    triangle(x + wingMargin, y - spaceshipWing + wingMargin/2, x+ wingMargin, y + spaceshipHeight + spaceshipWing - wingMargin/2, x + spaceshipWidth, y + spaceshipHeight/2);

    //body
    rect(x, y, spaceshipWidth, spaceshipHeight);
    
    //cockpit
    triangle(x + spaceshipWidth, y, x + spaceshipWidth, y + spaceshipHeight, x + spaceshipWidth + cockpitWidth, y + spaceshipHeight/2);

    //window
    ellipse(x + spaceshipWidth + cockpitWidth/4, y + spaceshipHeight/4, spaceshipHeight/2);
    

function ship(x, y, spaceshipWidth) {

}



 //   for (var i = 0; i < numSpaceships; i++) {
 //       ellipse(xPositions[i], yPositions[i], spaceshipSize[i]);
 //       xPositions[i] += spaceshipSpeed[i];
 //       if (xPositions[i] > width + spaceshipSize[i]/2) {
 //           xPositions[i] = -spaceshipSize[i]/2;
  //          yPositions[i] = random(0, height);
  //      }
  //  }
}