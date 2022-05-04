let canvas;
let circNums = 0;
let diff = 1;

// here we have a function that automatically resizes the canvas when the window shape changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// here we set up the canvas and do some slick CSS styling in p5.js to change the z-index to -1 so the sketch appears behind the HTML layer
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  noFill();
  colorMode(HSB);
}

// fun p5.js stuff we won't worry about too much for now
function draw() {
  background(255);

  if (circNums > 100) {
    diff = -1;
  } else if (circNums < 0) {
    diff = 1;
  }
  circNums = circNums + diff;

  for (let i = 0; i < circNums; i++) {
    stroke(map(i, 0, 100, 0, 360), 100, 100);
    circle(mouseX, mouseY, i * 5);
  }
}
