/* Main p5.js Sketch */

// Global variables
let sky;
let wind = 0;
let myDiv, bgDiv, socialDiv;

// Main page content
const divString = `
<center>
  <br>
  <img src="/img/tripwires.jpg" width="66%">
</center>
<div style="position:absolute;width:100%;bottom:0;">
  new single / out now!
  <table style="width:100%">
    <tr>
      <td><a href="https://royalchant.bandcamp.com/">bandcamp</a></td>
      <td><a href="https://tidal.com/browse/artist/6249079">TIDAL</a></td>
      <td><a href="https://open.spotify.com/artist/4ALhCzvDONaEUbRQ9A10Vc?si=rF9ZWfI_RYKbgNAVLMnCGg">Spotify</a></td>
    </tr>
    <tr>
      <td><a href="https://music.apple.com/us/artist/royal-chant/317858130">Apple</a></td>
      <td><a href="https://www.youtube.com/user/RoyalChant">YouTube</a></td>
    </tr>
  </table>
  <br><br>
</div>
`;

// Social links
const socials = `
<div>
  <a href="https://bsky.app/profile/royalchant.bsky.social"> bluesky </a> <br>
  <a href="https://www.tiktok.com/@RoyalChant"> tik tok </a> <br>
  <a href="http://facebook.com/royalchant"> facebook </a> <br>
  <a href="https://www.instagram.com/royalchantau/"> insta </a> <br>
  <a href="https://slantrhyme.wordpress.com/"> Mark's Blog </a> <br>
</div>
`;

/**
 * Sets up the main screen elements (canvas and HTML divs).
 * Called by setup(), windowResized(), and deviceTurned().
 */
function setupScreen() {
  createCanvas(windowWidth, windowHeight);
  const x = min(width, height);
  const ggsize = int(x / 50);

  // Recreate and style the socials div
  socialDiv.remove();
  socialDiv = createDiv(socials);
  socialDiv.style('font-family', "'courier new', courier");
  socialDiv.style('font-size', ggsize + 'px');
  socialDiv.style('text-align', 'right');
  socialDiv.position(windowWidth - 7 * ggsize, 5);
  socialDiv.show();

  // Create/position the main content
  const titleString =
    '<center><img src="/awaas-assets/royalchantlogo.gif" width="' +
    x / 2 +
    'px"></center>';
  myDiv.remove();
  myDiv = createDiv(titleString + '<br>' + divString);
  myDiv.id('myDiv');
  myDiv.style('font-family', "'courier new', courier");
  myDiv.style('padding', '50px');
  myDiv.style('font-size', ggsize + 'px');
  myDiv.size((3 * x) / 4, (3 * x) / 4);
  myDiv.style('background-color', 'rgba(255, 255, 255, 10)');
  myDiv.style('overflow', 'auto');
  myDiv.center();
  myDiv.show();
}

// p5.js special function called on device orientation change
function deviceTurned() {
  setupScreen();
}

// p5.js special function called whenever the window size changes
function windowResized() {
  setupScreen();
}

// Preload assets
function preload() {
  sky = loadImage('fas-assets/sky.jpeg');
}

/**
 * Standard p5.js setup function.
 * Creates div placeholders, calls setupScreen, etc.
 */
function setup() {
  myDiv = createDiv(' ');
  bgDiv = createDiv(' ');
  socialDiv = createDiv(' ');

  // If you load JSON above, you can process with getGigs(gigJSON);

  setupScreen();

  noStroke();
  angleMode(DEGREES);
  frameRate(30);
}

/**
 * Standard p5.js draw loop.
 * Scrolls a sky image across the canvas at a slight horizontal offset.
 */
function draw() {
  if (wind > sky.width) {
    wind = 0;
  }
  wind += 0.5;

  // Tile the sky image so it repeats across the entire canvas
  for (let i = -sky.width; i <= width + sky.width; i += sky.width) {
    for (let j = 0; j <= height; j += sky.height) {
      image(sky, wind + i, j);
    }
  }
}