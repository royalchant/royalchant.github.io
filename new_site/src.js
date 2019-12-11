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
let socialIcons = [];
let socialButtons = [];
let socialLinks = [];
let portrait = false;
let thisImage;
let prevImage;
let resizedFlag = false;
let socialHeight;

function randomLine() {
  return lyrics[int(random(lyrics.length))];
}

function preload(){
  songkickData = loadJSON(songkick);
  for (let i = 1; i <= 12; i++) {
    let newString = 'img/img_' + i + '.jpg';
    bgImages.push(loadImage(newString));
  }
  socialIcons.push(loadImage('icon/Bandcamp.png'));
  socialIcons.push(loadImage('icon/Facebook.png'));
  socialIcons.push(loadImage('icon/Instagram.png'));
  socialIcons.push(loadImage('icon/Soundcloud.png'));
  socialIcons.push(loadImage('icon/Spotify.png'));
  socialIcons.push(loadImage('icon/Tumblr.png'));
  socialIcons.push(loadImage('icon/Twitter.png'));
  socialIcons.push(loadImage('icon/Wordpress.png'));
  socialIcons.push(loadImage('icon/Youtube.png'));

  socialLinks.push(("https://royalchant.bandcamp.com"));
  socialLinks.push(("https://facebook.com/royalchant"));
  socialLinks.push(("https://instagram.com/royalchantau/"));
  socialLinks.push(("https://soundcloud.com/royalchant"));
  socialLinks.push(("https://play.spotify.com/artist/4ALhCzvDONaEUbRQ9A10Vc"));
  socialLinks.push(("http://dirtymabrecords.com/"));
  socialLinks.push(("https://twitter.com/royalchant"));
  socialLinks.push(("https://slantrhyme.wordpress.com/"));
  socialLinks.push(("https://www.youtube.com/user/RoyalChant"));
}

function init() {
  smooth();
  // pixelDensity(8);
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
    console.log('portrait');
  } else {
    portrait = false;
    console.log('landscape');
  }
  if (thisImage.width < window.innerWidth) {
      thisImage.resize((window.innerWidth+10.0), 0);
      prevImage.resize((window.innerWidth+10.0), 0);
  }
  if (thisImage.height < window.innerHeight) {
    thisImage.resize(0, (window.innerHeight+10));
    prevImage.resize(0, (window.innerHeight+10));
  }
  socialHeight = height-(socialIcons[0].height);
  for (let i = 0; i < socialIcons.length; i++){
    let dim = 48;
    x = 29 + 60*i;
    let dims = [x-dim/2, x+dim/2, socialHeight-dim/2, socialHeight+dim/2];
    socialButtons[i] = dims;
    image(socialIcons[i], x, socialHeight);
  }
}

function setup() {
  smooth();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  console.log('stop looking at me. do you want to do this instead? the page is public on github, send me a pull request');
  console.log(window.innerWidth, window.innerHeight)
  if (window.innerWidth < window.innerHeight) {
    portrait = true;
  } else {
    portrait = false;
  }
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

  init();
}

function draw() {
  frameRate(5);
  alpha+=3;
  background(0);
  tint(255, 255);
  image(prevImage,width/2,height/2);
  tint(255, alpha);
  image(thisImage,width/2,height/2);
  if (alpha >= 255) {
    alpha = 0;
    prevImageIndex = imageIndex;
    prevImage = thisImage;
    while (imageIndex == prevImageIndex){
      imageIndex = int(random(bgImages.length));
      thisImage = bgImages[imageIndex];
    }
    if (portrait == true) {
      thisImage.resize(0, (window.innerHeight+10));
      // prevImage.resize(0, (window.innerHeight+10));
    } else {
      thisImage.resize((window.innerWidth+10.0), 0);
      // prevImage.resize((window.innerWidth+10.0), 0);
    }
  }
  if (resizedFlag == true){
    lyricTextSize = int((window.innerWidth)/line.length);
    if (thisImage.width < window.innerWidth) {
        thisImage.resize((window.innerWidth+10.0), 0);
        prevImage.resize((window.innerWidth+10.0), 0);
    }
    if (thisImage.height < window.innerHeight) {
      thisImage.resize(0, (window.innerHeight+10));
      prevImage.resize(0, (window.innerHeight+10));
    }
    resizedFlag = false;
  }
  if (alpha%10 == 0) {
    line = randomLine();
    lyricTextSize = int((1.5*window.innerWidth)/line.length);
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
  strokeWeight(2);
  fill(rcRed);
  // textFont('Amatic SC');
  textFont('Lato');
  textSize(lyricTextSize);
  text(line.toUpperCase(), width/2, height/2);
  textAlign(LEFT);
  noStroke();
  textFont('Lato');
  textSize(gigTextSize);
  fill(rcWhite);
  tint(255, 255);
  text(eventString, 10, titleTextSize + gigTextSize/2);
  for (let i = 0; i < socialIcons.length; i++){
    //change init if you change ;-)
    image(socialIcons[i], 29 + 60*i, socialHeight);
  }
}

function touchStarted() {
let x = mouseX;
let y = mouseY;
  for (let i = 0; i < socialButtons.length; i++) {
    if ((x >= socialButtons[i][0])&&(x <= socialButtons[i][1])&&(y >= socialButtons[i][2])&&(y <= socialButtons[i][3])){
      window.location.href = socialLinks[i];
    }
  }
}

window.onresize = function() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas = null;
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  resizedFlag = true;
  init();
  console.log(window.innerWidth, window.innerHeight)
  if (window.innerWidth < window.innerHeight) {
    portrait = true;
  } else {
    portrait = false;
  }
};

// function deviceTurned() {
//   canvas = null;
//   canvas = createCanvas(window.innerWidth, window.innerHeight);
//   init();
//   draw();
// }
