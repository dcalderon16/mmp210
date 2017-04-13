function setup() {
    createCanvas(640, 480);
    background("white");
    translate(width/2, height/2);
}
function draw() {
    rotate(PI*frameCount/100);
    rect(0, 0, 100, 100);
}