var colors = ['#0f0', '#ff0', '#0ff', '#f0f'];
var songkick = 'http://api.songkick.com/api/3.0/artists/3678791/calendar.json?apikey=Wm4K3izLltuErN9H'
var songkickData;
var event_string;

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
    event_string = "NEXT SHOW: " + date + " @ " + start_time + ' '+ venue + " " + locale;
    console.log(event_string);
  }
}

function draw() {
  clear();
  background(colors[0]);
  text(event_string, mouseX, mouseY);
}
