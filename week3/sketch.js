function setup() {
    createCanvas(640, 480)

    var str1 = "DYLAN"

    var a = 75
    var b = 20
    var c = 155
    var d = 203
    var e = 50

    textFont("Helvetica");
    textSize(e+e);
    text("DYLAN", e, c-5);
    fill("pink");

    triangle(e, a, 78, b, 106, a);
    triangle(106, a, 134, b, 162, a);
    triangle(162, a, 190, b, 218, a);
    triangle(218, a, 246, b, 274, a);
    triangle(274, a, 302, b, 330, a);
    triangle(330, a, 358, b, 386, a);
    //bottom
    triangle(e, c, 78, d, 106, c);
    triangle(106, c, 135, d, 162, c);
    triangle(162, c, 190, d, 218, c);
    triangle(218, c, 246, d, 274, c);
    triangle(274, c, 302, d, 330, c);
    triangle(330, c, 358, d, 386, c);

}