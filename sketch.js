let bubbles = [];
let maxDistance;
let tempd = 0;
let d;

function setup() {
  createCanvas(1280, 720);
  let init = new Bubble(100, 20, 50);
  let init2 = new Bubble(10, 200, 50);
  bubbles.push(init, init2);

  meilleurParcours = bubbles.slice();
}



function draw() {
    
    
  if (bubbles.length > 2) {

    d = calc(bubbles);
    if (d < maxDistance) {
      maxDistance = d;
      console.log("Distance maximum " + maxDistance);
      meilleurParcours = bubbles.slice();


    }
  }

  background(0);
  fill(255);
  stroke(200);
  strokeWeight(1);
  for (let i = 0; i < bubbles.length; i++) {

    //bubbles[i].show();
    ellipse(bubbles[i].x, bubbles[i].y, 8, 8)
  }
  beginShape();
  for (let i = 0; i < bubbles.length; i++) {
    vertex(bubbles[i].x, bubbles[i].y)
    noFill();
  }
  
  endShape();
  stroke(255, 0, 255);
  strokeWeight(3);
  beginShape();

  for (let i = 0; i < bubbles.length; i++) {
    vertex(meilleurParcours[i].x, meilleurParcours[i].y)
    noFill();
  }
  endShape();
  let y = floor(random(bubbles.length));
  let j = floor(random(bubbles.length));
  mel(bubbles, y, j);
  
  noStroke();
  textSize(45)
  fill(255);
  
  text("Distance =  " + Math.round(maxDistance),11, 700);
  




}


function mousePressed() {

  let b = new Bubble(mouseX, mouseY, 50);
  bubbles.push(b);
  d = calc(bubbles);
  maxDistance = 100000000;



}
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }





  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, 3);
  }
}

function calc(points) {
  let somme = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    somme += d;

  }
  return somme;
}


function mel(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}