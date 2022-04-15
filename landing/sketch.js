// this sketch shows how to use texture coordinates to create a fly's eye mosaic effect
var sky;
var city;
var bgImage;
var fgImage;
var rad;
var mgImage;
var combined;
var weight = 30;
var transp = 100;
var myDiv;

// the shader variable
let camShader;

// the camera variable
let cam;

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
  for (let i = 0; i<= width; i+= w) {
    for (let j = 0; j <= height; j+= h) {
      if (j > 3 * h * cos(cosScale * i - 2) + 3*height/5) {
        fgImage.image(city, i, j, w, h, (random(city.width - w)), (random(city.height - h)), w, h);
      }

    }
  }
  combined = createGraphics(width, height);
  combined.image(bgImage, 0, 0);
  combined.image(mgImage, 0, 0);
  combined.image(fgImage, 0, 0);
  myDiv = createDiv('<h1>ROYAL CHANT<div>Anyways and also sorry...</h1><br>Out Now!<br><a href="royalchant.bandcamp.com">bandcamp</a><br>TIDAL<br>Spotify<br>Apple Music<br>YouTube<br>Google Play<br>');
  myDiv.style('font-family', "'courier new', courier");
  myDiv.style('padding', '50px');
  myDiv.style('background-color', 'rgba(255, 255, 255, 10)');
  myDiv.position(width/2, height/3);
  myDiv.center('horizontal');
  myDiv.show();
}

function deviceTurned() {
  setupScreen();
}

function windowResized() {
  setupScreen();
}

function preload(){
  // load the shader
  camShader = loadShader('effect.vert', 'effect.frag');
  sky = loadImage('sky.jpeg');
  city = loadImage('buildings.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setupScreen();
  noStroke();
  angleMode(DEGREES);


}

function draw() {
  let _width = (sin(frameCount/10) + 2) * width;
  let _height = (sin(frameCount/5) + 2) * height;
  shader(camShader);
  camShader.setUniform('tex0', combined);
  camShader.setUniform('resolution', [_width, _height]);
  rect(0,0,windowWidth, windowHeight);
  // strokeWeight(10);
  // stroke(255, 0, 0);
  // line(width/2, 0, width/2, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
