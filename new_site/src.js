let songkick = 'http://api.songkick.com/api/3.0/artists/3678791/calendar.json?apikey=Wm4K3izLltuErN9H'
let songkickData;
let eventString;
let bgImages = [];
let rcRed = [150, 0, 0];
let rcWhite = [150, 150, 150];
let imageIndex = 1;
let prevImageIndex = 0;
let alpha = 0;
let line;

function randomLine() {
  return lyrics[int(random(lyrics.length))];
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
    prevImageIndex = int(random(bgImages.length));
    while (imageIndex == prevImageIndex){
      imageIndex = int(random(bgImages.length));
    }
  }
  line = randomLine();
}



function draw() {
  alpha++;
  // imageIndex++
  // imageIndex = imageIndex%12;
  console.log(randomLine());
  background(0);
  tint(255, 255);
  image(bgImages[prevImageIndex],width/2,height/2);
  tint(255, alpha);
  image(bgImages[imageIndex],width/2,height/2);
  if (alpha >= 255) {
    alpha = 0;
    prevImageIndex = imageIndex;
    while (imageIndex == prevImageIndex){
      imageIndex = int(random(bgImages.length));
    }
  }
  if (alpha%10 == 0) {
    line = randomLine();
  }
  fill(rcRed);
  stroke(rcWhite);
  strokeWeight(5);
  textSize(40)
  textFont('Montserrat');
  textAlign(LEFT);
  text("ROYAL CHANT", 10, 50);
  textAlign(CENTER, CENTER);
  text(line.toUpperCase(), width/2, height/2);
  textSize(15)
  fill(rcWhite);
  noStroke();
  textFont('Lato');
  textAlign(LEFT);
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
