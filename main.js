var sky, logo;
var wind = 0;
var myDiv, bgDiv, dumbDiv, gigDiv, socialDiv;
let event_name, venue, locale, date, start_time;
let gigdata = [];
var songKick = 'https://api.songkick.com/api/3.0/artists/3678791/calendar.json?apikey=Wm4K3izLltuErN9H&&jsoncallback'
var bgDivString = '';
var dumbDivString = '<a href="pep">Remember when you could just print a CD and not have to list every artist leeching company on the internet?</a>';

var divString = `
<br>
<a href="https://royalchant.bandcamp.com/">bandcamp</a>
<br><small>^ mailing list + free music xoxo</small>
<br>
<a href="https://tidal.com/browse/artist/6249079">TIDAL</a>
<br>
<a href="https://open.spotify.com/artist/4ALhCzvDONaEUbRQ9A10Vc?si=rF9ZWfI_RYKbgNAVLMnCGg">Spotify</a>
<br>
<a href="https://music.apple.com/us/artist/royal-chant/317858130">Apple Music</a>
<br>
<a href="https://www.youtube.com/user/RoyalChant">YouTube</a>`;

var socials = `
<a href="http://twitter.com/royalchantmp"> twitter </a> <br>
<a href="http://facebook.com/royalchant"> facebook </a> <br>
<a href="http://dirtymabrecords.com/"> tumblr </a> <br>
<a href="https://slantrhyme.wordpress.com/"> Mark's Blog </a> <br>
`

var releaseDate = new Date('May 20, 2022');

function setupScreen() {
  // let today = new Date();
  // let sleeps = releaseDate.getUTCDate() - today.getUTCDate();
  // // console.log(sleeps);
  // if (sleeps <= 0) {
    divString = '<em>Out Now!</em>' + divString;
  // } else {
  //   divString = '<em>Drops in ' + str(sleeps) + ' days</em>' + divString;
  }

  createCanvas(windowWidth, windowHeight);
  let x = min(width, height);
  // let gigString = ''
  // for (let i = 0; i < gigdata.length; i++) {
  //   if (!(gigdata[i] === null)) {
  //     gigString += gigdata[i] + '<br>';
  //   }
  // }
  //
  // gigDiv.remove();
  // gigDiv = createDiv(gigString);
  // gigDiv.style('font-family', "'courier new', courier");
  // gigDiv.position(5, 5);
  let ggsize = int(x/50);
  // gigDiv.style('font-size', ggsize+"px");
  // gigDiv.show();

  socialDiv.remove();
  socialDiv = createDiv(socials);
  socialDiv.style('font-family', "'courier new', courier");
  socialDiv.position(windowWidth - 7*ggsize, 5);
  socialDiv.style('font-size', ggsize+"px");
  socialDiv.style('text-align', "right");
  socialDiv.show();

  dumbDiv.remove();
  dumbDiv = createDiv(dumbDivString);
  dumbDiv.position(0, windowHeight - 10);
  dumbDiv.style('font-family', "'courier new', courier");
  let ddsize = x/65;
  dumbDiv.style('font-size', ddsize+"px");
  dumbDiv.style('overflow', "auto");
  dumbDiv.show();

  bgDivString = '<img src="/awaas-assets/bg.png" width="' + (7*x/8) + '">';
  bgDiv.remove();
  bgDiv = createDiv(bgDivString);
  bgDiv.size((7*x/8), (7*x/8));
  bgDiv.center();
  bgDiv.center();
  bgDiv.show();
  let bodySize = int((x/2) / 15);
  let rcSize = int((x/2) / 10);
  let titleSize = int((x/2) / 15);
  let titleString = '<img src="/awaas-assets/royalchantlogo.gif" width="'+ x/2+ 'px"><h1 style="font-size: ' +titleSize + 'px;line-height: 0.8em;">Anyways and also sorry...</h1>'
  // let titleString = '<h1 style="font-size: ' +rcSize + 'px;line-height: 0.8em;">ROYAL CHANT</h1><h1 style="font-size: ' +titleSize + 'px;line-height: 0.8em;">Anyways and also sorry...</h1>'
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
  sky = loadImage('awaas-assets/sky.jpeg');
  // gigJSON = loadJSON(songKick);
  // logo = createImg('awaas-assets/royalchantlogo.gif');
}


// function getGigs(data) {
//   if (data.resultsPage.status == "ok" && data.resultsPage.totalEntries > 0) {
//     event_name = 'NEXT SHOW:<br><strong>' + data.resultsPage.results.event[0].displayName + '</strong>';
//     gigdata.push(event_name);
//     venue = data.resultsPage.results.event[0].venue.displayName;
//     gigdata.push(venue);
//     locale = data.resultsPage.results.event[0].venue.metroArea.displayName;
//     gigdata.push(locale);
//     date = data.resultsPage.results.event[0].start.date;
//     gigdata.push(date);
//     start_time = data.resultsPage.results.event[0].start.time;
//     gigdata.push(start_time);
//   } else {
//     gigdata.push('no shows :-(');
//   }
//
// }

function setup() {
  myDiv = createDiv(' ');
  bgDiv = createDiv(' ');
  dumbDiv = createDiv(' ');
  // gigDiv = createDiv(' ');
  socialDiv = createDiv(' ');
  // getGigs(gigJSON);
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
