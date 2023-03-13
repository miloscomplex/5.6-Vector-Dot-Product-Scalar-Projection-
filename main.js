let aVector, bVector;

function setup() {
  createCanvas(400, 400);

  aVector = createVector(100, -60);
  bVector = createVector(200, 60);
}

function vectorProjection(a,b) {
  let bCopy = bVector.copy().normalize();
  let sp = aVector.dot(bCopy);
  bCopy.mult(sp);
  return bCopy;
}

function draw() {
  background(50);
  strokeWeight(8);
  stroke(255);
  let pos = createVector(100, 200);


  let mouse = createVector(mouseX, mouseY);

  let a = p5.Vector.sub(mouse, pos);

  line(pos.x, pos.y, pos.x + aVector.x, pos.y + aVector.y);
  line(pos.x, pos.y, pos.x + bVector.x, pos.y + bVector.y);

  let vector = vectorProjection(aVector,bVector);
  strokeWeight(10);
  stroke(0,0,255);
  line(pos.x, pos.y, pos.x + vector.x, pos.y + vector.y);

  stroke(255);
  strokeWeight(3)
  line(pos.x + aVector.x, pos.y + aVector.y, vector.x + pos.x, vector.y + pos.y)
  fill(255,0,0);
  noStroke();
  circle(vector.x + pos.x, vector.y + pos.y, 16);

  fill(0,255,0);
  noStroke();
  circle(pos.x + aVector.x, pos.y + aVector.y, 16);

  fill(0, 255, 0);
  noStroke();
  circle(pos.x, pos.y, 8);

}