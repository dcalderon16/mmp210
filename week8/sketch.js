function setup() {
    createCanvas(640, 640);
    background(0);
    
   noStroke();
    
    var numberOfPlanets = 200;
    var columns = Math.sqrt(numberOfPlanets);
    var rows = Math.sqrt(numberOfPlanets);
    var w = width / columns;
    var h = height / rows;

    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
            
            // top planets
            if (y < height/5) {
                // random pastels
                r = random(107, 229);
                g = random(107, 229);
                b = random(107, 259);
                w = h = random(10, 40);

            } else if (y > height * 3/4) {
                // random bottom planet colors/darker tones
                r = random(0, 255);
                g = random(0, 255);
                b = random(0, 255);
                // random flower size
                w = h = random(10, 40);
            } else {
                // random mid planet colors/brighter tones
                r = random(0, 168);
                g = random(0, 168);
                b = random(0, 168);
                w = h = random(10, 40);
            }
            fill(r,g, b);            
            
            // bottom planets
            if ( y > height * 3/4) {
                ellipse(x, y, w, h);
                fill(
                    random(247, 255),
                    random(247, 255),
                    random(247, 255)
                );
                ellipse(x+50, y+30, w/2, h/3);
            } else {
                // top and mid plants
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