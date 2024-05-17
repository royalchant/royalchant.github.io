var sky, logo;
var wind = 0;
var myDiv, bgDiv, dumbDiv, gigDiv, socialDiv;
let event_name, venue, locale, date, start_time;
let gigdata = [];
var songKick = 'https://api.songkick.com/api/3.0/artists/3678791/calendar.json?apikey=Wm4K3izLltuErN9H&&jsoncallback'
var bgDivString = '';
//<img src="/fas-assets/fs.jpg" width=66%>
var divString = `
<center>
<br>
<img src="/img/bfd.jpg" width=66%>
</center>

<div style="position:absolute;width:100%;bottom:0;">
  new single / out now!
  <table style="width:100%">
  <tr>
  <td>
  <a href="https://royalchant.bandcamp.com/">bandcamp</a>
  </td>
  <td>
  <a href="https://tidal.com/browse/artist/6249079">TIDAL</a>
  </td>
  <td>
  <a href="https://open.spotify.com/artist/4ALhCzvDONaEUbRQ9A10Vc?si=rF9ZWfI_RYKbgNAVLMnCGg">Spotify</a>
  </td>
  </tr>
  <tr>
  <td>
  <a href="https://music.apple.com/us/artist/royal-chant/317858130">Apple</a>
  </td>
  <td>
  <a href="https://www.youtube.com/user/RoyalChant">YouTube</a>
  </td>
  </tr>
  </table>
  <br><br>
</div>`;

var socials = `
<a href="http://twitter.com/royalchantmp"> twitter </a> <br>
<a href="http://facebook.com/royalchant"> facebook </a> <br>
<a href="http://dirtymabrecords.com/"> tumblr </a> <br>
<a href="www.instagram.com/royalchantau"> insta </a> <br>
<a href="https://slantrhyme.wordpress.com/"> Mark's Blog </a> <br>
`

var releaseDate = new Date('May 20, 2022');

function setupScreen() {

  createCanvas(windowWidth, windowHeight);
  let x = min(width, height);
  let ggsize = int(x/50);

  socialDiv.remove();
  socialDiv = createDiv(socials);
  socialDiv.style('font-family', "'courier new', courier");
  socialDiv.position(windowWidth - 7*ggsize, 5);
  socialDiv.style('font-size', ggsize+"px");
  socialDiv.style('text-align', "right");
  socialDiv.show();

  // bgDivString = '<img src="/awaas-assets/bg.png" width="' + (7*x/8) + '">';
  // bgDiv.remove();
  // bgDiv = createDiv(bgDivString);
  // bgDiv.size((7*x/8), (7*x/8));
  // bgDiv.center();
  // bgDiv.center();
  // bgDiv.show();
  let titleString = '<center><img src="/awaas-assets/royalchantlogo.gif" width="'+ x/2+ 'px"></center>'
  myDiv.remove();
  myDiv = createDiv(titleString + '<br>' + divString);
  myDiv.style('font-family', "'courier new', courier");
  myDiv.style('padding', '50px');
  myDiv.style('font-size',  ggsize +"px");
  myDiv.size(3*x/4, 3*x/4);
  myDiv.center();
  myDiv.center();
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
  sky = loadImage('fas-assets/sky.jpeg');
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
