var myDiv;
var bg;
var myGraph;


function setupScreen() {
  createCanvas(windowWidth, windowHeight);
  myGraph = createGraphics(width, height);
  for (let i = 0; i <= width; i+= sky.width) {
    for (let j = 0; j <= height; j+= sky.height) {
      myGraph.image(sky, i, j);
    }
  }
  myGraph.imageMode(CENTER);
  myGraph.image(bg, width/2, height/2);
  myDiv.remove();
  myDiv = createDiv('<h1 style="line-height: 0.8em;">ROYAL CHANT<br>Anyways and also sorry...</h1><em>Out Now!</em><br><a href="https://royalchant.bandcamp.com/">bandcamp</a> <small><- we have a mailing list & free music here xoxo</small><br>TIDAL<br>Spotify<br>Apple Music<br>YouTube<br>Google Play<br><small><small><small><small><a href="pep">remember when you could just print a CD and not have to list artist leeching company on the internet?</a></small></small></small></small>');
  myDiv.style('font-family', "'courier new', courier");
  myDiv.style('padding', '50px');
  myDiv.style('text-size-adjust', 'auto');
  let x= min(width, height);
  myDiv.size(x/2, x/2);
  myDiv.style('background-color', 'rgba(255, 255, 255, 10)');
  myDiv.center();
  myDiv.style('overflow', "auto");
  myDiv.show();

}

function deviceTurned() {
  setupScreen();
}

function windowResized() {
  setupScreen();
}

function preload(){
  bg = loadImage('bg.png');
  sky = loadImage('sky.jpeg');
  // city = loadImage('buildings.png');
}

function setup() {

  myDiv = createDiv(' ');
  setupScreen();
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  image(myGraph, 0, 0);
}

function windowResized(){
  setupScreen();
}
