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
  console.log(cosScale);
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
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  // initialize the webcam at the window size
  // cam = createCapture(VIDEO);
  // cam.size(windowWidth, windowHeight);

  // hide the html element that createCapture adds to the screen
  // cam.hide();
  setupScreen();
  angleMode(DEGREES);


}

function draw() {
  let _width = (sin(frameCount/10) + 2) * width;
  let _height = (sin(frameCount/5) + 2) * height;


  // shader() sets the active shader with our shader
  shader(camShader);

  // send the camera and the resolution to the shader
  camShader.setUniform('tex0', combined);
  camShader.setUniform('resolution', [_width, _height]);

  // rect gives us some geometry on the screen
  rect(0,0,width, height);


}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
