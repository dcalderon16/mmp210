// Setup code
function setup () {
    createCanvas(400, 400);
    background('255');
    frameRate(5);
}
 
// Drawing code
function draw () {
    translate(random(0, width), random(0, height));

    angleMode(DEGREES);
    rotate(random(1, 360));
    fill('lightblue');
    rect(0, 0, 50, 50);
    
    rotate(random(1, 360));
    fill('pink');
    ellipse(25, 25, 25, 25);

    rotate(random(1, 360));
    fill('lightgreen');
    triangle(25, 0, 50, 50, 0, 50);
}