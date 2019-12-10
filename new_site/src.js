let songkick = 'https://api.songkick.com/api/3.0/artists/3678791/calendar.json?apikey=Wm4K3izLltuErN9H'
let songkickData;
let eventString;
let bgImages = [];
let rcRed = [150, 0, 0];
let rcWhite = [150, 150, 150];
let rcWhiteTrans = [150, 150, 150, 150];
let rcRedTrans = [150, 0, 0, 150];
let imageIndex = 1;
let prevImageIndex = 0;
let lyricTextSize = 40;
let alpha = 0;
let line;
let titleTextSize = 40;
let gigTextSize = 15;
let bandcamp = 0;
let facebook = 1;
let instagram = 2;
let soundcloud = 3;
let spotify = 4;
let tumblr = 5;
let twitter = 6;
let wordpress = 7;
let youtube = 8;
let socials = [];
let portrait = false;
let thisImage;
let prevImage;

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
  socials.push(loadImage('icon/Bandcamp.png'));
  socials.push(loadImage('icon/Facebook.png'));
  socials.push(loadImage('icon/Instagram.png'));
  socials.push(loadImage('icon/Soundcloud.png'));
  socials.push(loadImage('icon/Spotify.png'));
  socials.push(loadImage('icon/Tumblr.png'));
  socials.push(loadImage('icon/Twitter.png'));
  socials.push(loadImage('icon/Wordpress.png'));
  socials.push(loadImage('icon/Youtube.png'));
}

function init() {
  smooth(8);
  pixelDensity(2);
  background(0);
  fill(rcRed);
  stroke(rcWhite);
  imageMode(CENTER);
  image(thisImage,width/2,height/2);
  titleTextSize = int(((window.innerWidth)/11.0));
  if (titleTextSize > 70) {titleTextSize=70;}
  gigTextSize = int(((window.innerWidth)/eventString.length));
  if (gigTextSize > 20) {gigTextSize=20;}
  if (window.innerWidth < window.innerHeight) {
    portrait = true;
  } else {
    portrait = false;
  }
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  console.log('stop looking at me. do you want to do this instead? the page is public on github, send me a pull request');
  if (songkickData.resultsPage.status == "ok") {
    let event_name = songkickData.resultsPage.results.event[0].displayName.toUpperCase();
    let venue = songkickData.resultsPage.results.event[0].venue.displayName.toUpperCase();
    let locale = songkickData.resultsPage.results.event[0].venue.metroArea.displayName.toUpperCase();
    let date = songkickData.resultsPage.results.event[0].start.date.toUpperCase();
    let start_time = songkickData.resultsPage.results.event[0].start.time.substring(0, 5).toUpperCase();
    eventString = venue + " " + locale + ' - ' + date + " @ " + start_time;
    prevImageIndex = int(random(bgImages.length));
    while (imageIndex == prevImageIndex){
      imageIndex = int(random(bgImages.length));
    }
    thisImage = bgImages[imageIndex];
    prevImage = bgImages[prevImageIndex];
  }
  line = randomLine();
  lyricTextSize = int((window.innerWidth/1.5)/line.length);
  init();
}

function draw() {
  alpha++;
  background(0);
  tint(255, 255);
  image(prevImage,width/2,height/2);
  tint(255, alpha);
  image(thisImage,width/2,height/2);
  if (alpha >= 255) {
    alpha = 0;
    prevImageIndex = imageIndex;
    while (imageIndex == prevImageIndex){
      imageIndex = int(random(bgImages.length));
      thisImage = bgImages[imageIndex];
      prevImage = bgImages[prevImageIndex];
      if (portrait == true) {
        thisImage.resize(0, (window.innerHeight+10));
        prevImage.resize(0, (window.innerHeight+10));
      } else {
        thisImage.resize((window.innerWidth+10.0), 0);
        prevImage.resize((window.innerWidth+10.0), 0);
      }
    }
  }
  if (alpha%10 == 0) {
    line = randomLine();
    lyricTextSize = int((window.innerWidth/1.5)/line.length);
  }
  fill(rcRed);
  stroke(rcWhite);
  strokeWeight(5);
  textSize(titleTextSize);
  textFont('Montserrat');
  textAlign(LEFT);
  text("ROYAL CHANT", 10, titleTextSize/2);
  textFont('Lato');
  textAlign(CENTER, CENTER);
  stroke(rcWhiteTrans)
  fill(rcRedTrans);
  textSize(lyricTextSize);
  text(line.toUpperCase(), width/2, height/2);
  textAlign(LEFT);
  noStroke();
  textSize(gigTextSize);
  fill(rcWhite);
  tint(255, 100);
  text(eventString, 10, titleTextSize + gigTextSize/2);
  let socialHeight = height-(socials[0].height);
  for (let i = 0; i < socials.length; i++){
    socials[i].resize(27, 27);
    image(socials[i], 29 + 60*i, socialHeight);
  }
}

window.onresize = function() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas = null;
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  init();
  draw();
};

// function deviceTurned() {
//   canvas = null;
//   canvas = createCanvas(window.innerWidth, window.innerHeight);
//   init();
//   draw();
// }
