// midterm - generative pattern

function setup() {
    createCanvas(640, 640);
    background(0);
    
   noStroke();
    
    var numberOfRectangles = 200;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);
    
//    var rows = 5;
//    var columns = numberOfRectangles / rows;
    
    var w = width / columns;
    var h = height / rows;

    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
            
            // rain
            if (y < height/5) {
                // random rain blue color
                r = random(107, 229);
                g = random(107, 229);
                b = random(107, 259);
                //random rain size and position
                w = h = random(10, 40);
               // x += random(-25, 40);
                //w = random(40, 20);
            } else if (y > height * 3/4) {
                // random flower color
                r = random(0, 255);
                g = random(0, 255);
                b = random(0, 255);
                // random flower size
                w = h = random(10, 40);
            } else {
                // random green grass color

   
                r = random(0, 168);
                g = random(0, 168);
                b = random(0, 168);
                //random grass position
               // x += random(-25, 40);
                w = h = random(10, 40);
               // w = random(40, 10);

            }
            
            // all of the color fills
            fill(r,g, b);            
            
            // flowers
            if ( y > height * 3/4) {
                // flowers
                ellipse(x, y, w, h);
               
                //inside 
                fill(
                    random(247, 255),
                    random(247, 255),
                    random(247, 255)
                );
                ellipse(x+50, y+30, w/2, h/3);
            } else {
                // rain & grass



                ellipse(x, y, w, h);
            }
                fill(
                    random(247, 255),
                    random(247, 255),
                    random(247, 255)
                );
                ellipse(x+50, y+30, w/4, h/5);
            
            x = tempX;
            w = tempW;
            h = tempH;

        }
    }
}