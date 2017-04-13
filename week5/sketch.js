function setup() { 
  createCanvas(600, 600);
  background(110);
  
  var space = 50;

  for (var x = space/9; x < width; x+=space) {
    for (var y = space/9; y < height; y+=space) {
      rect(x, y, 20, 40);
        rect(x, y, 10, 40)
        rect(x, y, 20, 20)
        rect(x, y, 10, 20)
    
    }
  }
}