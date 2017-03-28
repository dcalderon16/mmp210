function setup() {
    createCanvas(640, 480)
    
    var orange = color(255, 204, 51);
    var purple = color(138, 0, 184);
    var beige = color(225, 204, 153);
    var gray = color(224,224,224);
    var pink = color(255,153,204);
    var black = color(0,0,0);
    var brown = color (153,102,0);

    noStroke();
    
    //pencil
    fill(orange);
    rect(400, 50, 50, 370);

    fill(beige);
    triangle(400,50, 425,5, 450,50);

    fill(gray);
    rect(400,400,50,50);

    fill(pink);
    rect(400,430,50,40);

    fill(black);
    triangle(411,30, 425,5, 439,30);

    //brush 1
    fill(brown);
    rect(300, 50, 50,420, 30);

    fill(gray);
    rect(287, 50, 80, 70, 20);

    fill(beige);
    rect(287, 30, 80, 70);
    
    fill(purple);
    rect(287, 10, 80, 40);

    //pencil 2
    fill(orange);
    rect(200, 50, 50, 370);

    fill(beige);
    triangle(200,50, 225,5, 250,50);

    fill(gray);
    rect(200,400,50,50);

    fill(pink);
    rect(200,430,50,40);

    fill(black);
    triangle(211,30, 225,5, 239,30);

    //brush 2
    fill(brown);
    rect(100, 50, 50,420, 30);

    fill(gray);
    rect(87, 50, 80, 70, 20);

    fill(beige);
    rect(87, 30, 80, 70);
    
    fill(purple);
    rect(87, 10, 80, 40);


}