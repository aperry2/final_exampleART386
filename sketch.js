// const tonality = "====+++++++++********#########%%%%%%%%@@@@@@@@@@@@";

const tonality = ".=+*#%@";


let feed;

function setup() {
  createCanvas(640, 480);

  feed = createCapture(VIDEO);
  feed.size(64, 48);
  feed.hide();
}

function draw() {
  background(0);
  // image(feed, 0, 0, width, height);
  
  feed.loadPixels();
  
  let w = width / feed.width;
  let h = height / feed.height;
  
  for (let i = 0; i < feed.width; i++) {
    for (let j = 0; j < feed.height; j++) {
      const pixIndex = (i + j * feed.width) * 4;
      const r = feed.pixels[pixIndex + 0];
      const g = feed.pixels[pixIndex + 1];
      const b = feed.pixels[pixIndex + 2];
      
      const avg = (r + g + b) / 3;
      
      noStroke();
      // fill(avg);  
      fill(r, g, b);
      
      rect(i * w, j * h, w, h);
      
      fill(255);
      
      const len = tonality.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      
      textAlign(CENTER, CENTER);
      textSize(w);
      text(tonality.charAt(charIndex), i * w + (w * 0.5), j * h + (h * 0.5));
    }
  }
}
