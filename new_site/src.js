var colors = ['#0f0', '#ff0', '#0ff', '#f0f'];
var songkick = 'http://api.songkick.com/api/3.0/artists/3678791/calendar.json?apikey=Wm4K3izLltuErN9H'
var songkickData;
var eventString;
var bgImages = [];

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


function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  smooth(8);
  pixelDensity(2);
  // background(rcol());
  background(colors[0]);
  console.log('stop looking at me. do you want to do this instead? the page is public on github, send me a pull request');
  if (songkickData.resultsPage.status == "ok") {
    let event_name = songkickData.resultsPage.results.event[0].displayName;
    let venue = songkickData.resultsPage.results.event[0].venue.displayName;
    let locale = songkickData.resultsPage.results.event[0].venue.metroArea.displayName;
    let date = songkickData.resultsPage.results.event[0].start.date;
    let start_time = songkickData.resultsPage.results.event[0].start.time.substring(0, 5);
    eventString = "NEXT SHOW: " + date + " @ " + start_time + ' '+ venue + " " + locale;
    console.log(eventString);
  }
}
let i = 0;
let j = 0;
function draw() {
  if (i%10000 == 0) {
    j++
    j = j%12;
  }
  clear();
  background(colors[0]);
  image(bgImages[j],0,0);
  text(eventString, mouseX, mouseY);
}
