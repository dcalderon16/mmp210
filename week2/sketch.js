function setup() {
    createCanvas(640, 480)
    //colors
    var orange = color(255, 204, 51);
    var purple = color(138, 0, 184);
    var beige = color(225, 204, 153);
    var gray = color(224,224,224);
    var pink = color(255,153,204);
    var black = color(0,0,0);
    var brown = color (153,102,0);
    //numbers
    var a = 400;
    var b = 50;
    var c = 5;
    var d = 200;
    var e = 80;

    noStroke();
    
    //pencil
    fill(orange);
    rect(a, b, b, a-30);

    fill(beige);
    triangle(a, b, a+25, c, a+50, b);

    fill(gray);
    rect(a, a, b, b);

    fill(pink);
    rect(a, a+30, b, b-10);

    fill(black);
    triangle(a+11, b-20, a+25, c, a+39, b-20);

    //brush 1
    fill(brown);
    rect(a-100, b, b, a+20, b-20);

    fill(gray);
    rect(d+87, b, e, e-10, b-30);

    fill(beige);
    rect(d+87, b-20, e, e-10);
    
    fill(purple);
    rect(d+87, c+c, e, e-40);

    //pencil 2
    fill(orange);
    rect(d, b, b, a-30);

    fill(beige);
    triangle(d, b, d+25, c, d+50, b);

    fill(gray);
    rect(d, a, b, b);

    fill(pink);
    rect(d, a+30, b, b-10);

    fill(black);
    triangle(d+11, b-20, d+25,5, d+39, b-20);

    //brush 2
    fill(brown);
    rect(d-100, b, b, a+20, b-20);

    fill(gray);
    rect(e+7, b, e, e-10, b-30);

    fill(beige);
    rect(e+7, b-20, e, e-10);
    
    fill(purple);
    rect(e+7, c+c, e, b-10);


}