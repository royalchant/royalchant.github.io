var myDiv;
var bgDiv;
var bgDivString = '';
var dumbDiv;
var dumbDivString = '<a href="pep">Remember when you could just print a CD and not have to list artist leeching company on the internet?</a>';
var bg;
var wind = 0;
var myGraph;
var divString = `
<em>Out Now!</em>
<br>
<a href="https://royalchant.bandcamp.com/">bandcamp</a>
<br><small>^ we have a mailing list & free music here xoxo</small>
<br>
<a href="https://tidal.com/browse/artist/6249079">TIDAL</a>
<br>
<a href="https://open.spotify.com/artist/4ALhCzvDONaEUbRQ9A10Vc?si=rF9ZWfI_RYKbgNAVLMnCGg">Spotify</a>
<br>
<a href="https://music.apple.com/us/artist/royal-chant/317858130">Apple Music</a>
<br>
<a href="https://www.youtube.com/user/RoyalChant">YouTube</a>`;


function setupScreen() {
  createCanvas(windowWidth, windowHeight);
  // myGraph.imageMode(CENTER);
  // myGraph.image(bg, width/2, height/2);
  let x = min(width, height);

  dumbDiv.remove();
  dumbDiv = createDiv(dumbDivString);
  dumbDiv.position(0, windowHeight - 10);
  dumbDiv.style('font-family', "'courier new', courier");
  let ddsize = x/65;
  dumbDiv.style('font-size', ddsize+"px");
  dumbDiv.style('overflow', "auto");
  dumbDiv.show();

  bgDivString = '<img src="bg.png" width="' + (7*x/8) + '">';
  bgDiv.remove();
  bgDiv = createDiv(bgDivString);
  bgDiv.size((7*x/8), (7*x/8));
  bgDiv.center();
  bgDiv.center();
  bgDiv.show();
  let bodySize = int((x/2) / 15);
  let rcSize = int((x/2) / 10);
  let titleSize = int((x/2) / 15);
  let titleString = '<h1 style="font-size: ' +rcSize + 'px;line-height: 0.8em;">ROYAL CHANT</h1><h1 style="font-size: ' +titleSize + 'px;line-height: 0.8em;">Anyways and also sorry...</h1>'
  myDiv.remove();
  myDiv = createDiv(titleString + '<br>' + divString);
  myDiv.style('font-family', "'courier new', courier");
  myDiv.style('padding', '50px');
  // myDiv.style('text-size-adjust', 'auto');

  myDiv.style('font-size',  bodySize +"px");

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
  bgDiv = createDiv(' ');
  dumbDiv = createDiv(' ');
  setupScreen();
  noStroke();
  angleMode(DEGREES);
  frameRate(30);
}

function draw() {
  if (wind > sky.width){
    wind = 0;
  }
  wind += 0.5;
  for (let i = -sky.width; i <= width + sky.width; i+= sky.width) {
    for (let j = 0; j <= height; j+= sky.height) {
      image(sky, wind + i, j);
    }
  }
}

function windowResized(){
  setupScreen();
}
