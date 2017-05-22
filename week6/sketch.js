function setup() {
    createCanvas(640, 480);
   // frameRate(2);
}
 
function draw() {
    translate(random(0,width), random(0,height));
 
    angleMode(DEGREES);
    rotate(random(1, 360));
    rect(400, 50, 50, 370);

    triangle(400, 50, 425, 5, 450, 50);

    rect(400, 400, 50, 50);

    rect(400, 430, 50, 40);
    
    triangle(411, 30, 425, 5, 439, 30);
}