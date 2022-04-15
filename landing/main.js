var sky;
var city;
var bgImage;
var fgImage;
var rad;
var mgImage;
var weight = 30;
var transp = 100;

function deviceTurned() {
  setupScreen();
}

function windowResized() {
  setupScreen();
}

function preload() {
  sky = loadImage('sky.jpeg');
  city = loadImage('buildings.png');
}

function setupScreen() {
  createCanvas(windowWidth, windowHeight);
  // background sky
  bgImage = createGraphics(width, height);
  for (let i = 0; i <= width; i+= sky.width) {
    for (let j = 0; j <= height; j+= sky.height) {
      bgImage.image(sky, i, j);
    }
  }
  // rainbow
  rad = 2*windowHeight - weight;
  mgImage = createGraphics(width, height);
  mgImage.noFill();
  mgImage.strokeWeight(weight);
  mgImage.stroke(color(148, 0, 211, transp));
  mgImage.circle(0, height, rad);
  rad-=weight;
  mgImage.stroke(color(75, 0, 130, transp));
  mgImage.circle(0, height, rad);
  rad-=weight;
  mgImage.stroke(color(0, 0, 255, transp));
  mgImage.circle(0, height, rad);
  rad-=weight;
  mgImage.stroke(color(0, 255, 0, transp));
  mgImage.circle(0, height, rad);
  rad-=weight;
  mgImage.stroke(color(255, 255, 0, transp));
  mgImage.circle(0, height, rad);
  rad-=weight;
  mgImage.stroke(color(255, 127, 0, transp));
  mgImage.circle(0, height, rad);
  rad-=weight;
  mgImage.stroke(color(255, 0, 0, transp));
  mgImage.circle(0, height, rad);
  // foreground city
  angleMode(RADIANS);
  fgImage = createGraphics(width, height);
  let w = sky.width / 5;
  let h = sky.height / 5;
  let cosScale = PI / width;
  console.log(cosScale);
  for (let i = 0; i<= width; i+= w) {
    for (let j = 0; j <= height; j+= h) {
      if (j > 3 * h * cos(cosScale * i - 2) + 3*height/5) {
        fgImage.image(city, i, j, w, h, (random(city.width - w)), (random(city.height - h)), w, h);
      }

    }
  }
}


function setup() {

  setupScreen();

}

function draw() {

  image(bgImage, 0, 0);
  //rainbow

  image(fgImage, 0, 0);

}
