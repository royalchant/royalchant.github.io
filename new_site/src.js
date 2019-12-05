var colors = ['#0f0', '#ff0', '#0ff', '#f0f'];
var songkick = 'http://api.songkick.com/api/3.0/artists/3678791/calendar.json?apikey=Wm4K3izLltuErN9H'
var songkickData;
var eventString;
var bgImages = [];
var rcRed = [150, 0, 0];
var rcWhite = [150, 150, 150];
let imageIndex = 0;

function rcol() {
  return colors[(int(random(colors.length)))];
};

function coin() {
  return random(1) > .5;
}

function randint(x) {
  return (random(x));
}

function preload(){
  songkickData = loadJSON(songkick);
  for (let i = 1; i <= 12; i++) {
    let newString = 'img/img_' + i + '.jpg';
    console.log(newString);
    bgImages.push(loadImage(newString));
  }
}

function init() {
  smooth(8);
  pixelDensity(2);
  background(0);
  fill(rcRed);
  stroke(rcWhite);

  imageMode(CENTER);
  image(bgImages[imageIndex],width/2,height/2);
}


function setup() {
  init();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  console.log('stop looking at me. do you want to do this instead? the page is public on github, send me a pull request');
  if (songkickData.resultsPage.status == "ok") {
    let event_name = songkickData.resultsPage.results.event[0].displayName.toUpperCase();
    let venue = songkickData.resultsPage.results.event[0].venue.displayName.toUpperCase();
    let locale = songkickData.resultsPage.results.event[0].venue.metroArea.displayName.toUpperCase();
    let date = songkickData.resultsPage.results.event[0].start.date.toUpperCase();
    let start_time = songkickData.resultsPage.results.event[0].start.time.substring(0, 5).toUpperCase();
    eventString = venue + " " + locale + ' - ' + date + " @ " + start_time;
    // eventString = venue + "\n" + locale + "\n" + date + "\n" + start_time;
    console.log(eventString);
  }
}


function draw() {
  frameRate(1);
  imageIndex++
  imageIndex = imageIndex%12;
  background(0);
  image(bgImages[imageIndex],width/2,height/2);
  fill(rcRed);
  stroke(rcWhite);
  strokeWeight(5);
  textSize(50)
  textFont('Montserrat');
  text("ROYAL CHANT", 10, 50);
  textSize(15)
  fill(rcWhite);
  noStroke();
  textFont('Lato');
  text(eventString, 10, 80);
}

window.onresize = function() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas = null;
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  init();
  draw();
};

function deviceTurned() {
  canvas = null;
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  init();
  draw();
}
