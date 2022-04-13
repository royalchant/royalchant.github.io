let _start;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // ortho();
  perspective();
  strokeWeight(3);
  background(255);
  _start = -width / 3;
}

function draw() {
  let start = _start;
  background(255);
  orbitControl();
  translate(start, 0, 0);
  push();

  box(10, 80, 20);

  translate(30, -20, 0);
  push();
  box(10, 20, 20);
  pop();

  translate(0, 40, 0);
  push();
  box(10, 40, 20);
  pop();

  translate(30, -20, 0); // the end of R, could have a top bit
  push();
  box(10, 80, 20);
  pop();

  translate(30, 0, 0);
  push();
  box(10, 40, 20);
  pop();

  translate(30, 0, 0);
  push();
  box(10, 80, 20);
  pop();

  translate(15, 20, 0); // start of Y
  push();
  box(20, 40, 20);
  pop();

  // translate(10, 0, 0);
  // push();
  // box(20, 40, 10);
  // pop();

  translate(15, -50, 0);
  push();
  box(10, 20, 20);
  pop();

  translate(25, 30, 0); // end of Y
  push();
  box(10, 80, 20);
  pop();

  translate(30, -20, 0);
  push();
  box(10, 20, 20);
  pop();

  translate(0, 40, 0);
  push();
  box(10, 40, 20);
  pop();

  translate(30, -20, 0); // end of A
  push();
  box(10, 80, 20);
  pop();

  translate(35, -5, 0);
  push();
  box(30, 70, 20);
  pop();

  // translate(20, 0, 0);
  // push();
  // box(10, 70, 20);
  // pop();

  translate(20, 5, 0); // start of C
  push();
  box(10, 80, 20);
  pop();

  translate(35, 0, 0);
  push();
  box(30, 60, 20);
  pop();

  translate(20, 0, 0); // start of H
  push();
  box(10, 80, 20);
  pop();

  translate(30, -25, 0);
  push();
  box(10, 30, 20);
  pop();

  translate(0, 50, 0);
  push();
  box(10, 30, 20);
  pop();

  translate(30, -25, 0); // end of H
  push();
  box(10, 80, 20);
  pop();

  translate(30, -20, 0);
  push();
  box(10, 20, 20);
  pop();

  translate(0, 40, 0);
  push();
  box(10, 40, 20);
  pop();

  translate(30, -20, 0); // end of A
  push();
  box(10, 80, 20);
  pop();

  translate(20, 20, 0);
  push();
  box(10, 40, 20);
  pop();

  translate(10, -55, 0);
  push();
  box(10, 10, 20);
  pop();

  translate(0, 70, 0);
  push();
  box(10, 10, 20);
  pop();

  translate(10, -55, 0);
  push();
  box(10, 40, 20);
  pop();

  translate(20, 20, 0); // end of N
  push();
  box(10, 80, 20);
  pop();

  translate(10, 10, 0);
  push();
  box(10, 60, 20);
  pop();

  translate(30, 0, 0);
  push();
  box(10, 60, 20);
  pop();

  translate(10, -10, 0);
  push();
  box(10, 80, 20);
  pop();



  pop();
}
