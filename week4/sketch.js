function setup() {
	createCanvas(600, 400);
}

function draw() {
	strokeWeight(2);
	stroke("white");

	if (mouseX > width/3) {
		fill("blue");
	} else {
		fill("red");
	}

	rect(mouseX, mouseY, 70, 70);
}