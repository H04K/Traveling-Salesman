let villes = [];
let maxDistance;
let tempd = 0;
let d;
let test = 0;

function setup() {
  createCanvas(1280, 720);
  let init = new Ville(100, 20, 50);
  let init2 = new Ville(10, 200, 50);
  villes.push(init, init2);

  meilleurParcours = villes.slice();
}



function draw() {
    
    
  if (villes.length > 2) {
    test++
    d = calc(villes);
    if (d < maxDistance) {
      maxDistance = d;
      console.log("Distance maximum " + maxDistance);
      meilleurParcours = villes.slice();


    }
  }

  background(0);
  fill(255);
  stroke(200);
  strokeWeight(0.5);
  for (let i = 0; i < villes.length; i++) {

    //villes[i].show();
    ellipse(villes[i].x, villes[i].y, 8, 8)
  }
  beginShape();
  for (let i = 0; i < villes.length; i++) {
    vertex(villes[i].x, villes[i].y)
    noFill();
  }
  
  endShape();
  stroke(255, 0, 255);
  strokeWeight(4);
  beginShape();

  for (let i = 0; i < villes.length; i++) {
    vertex(meilleurParcours[i].x, meilleurParcours[i].y)
    noFill();
  }
  endShape();
  let y = floor(random(villes.length));
  let j = floor(random(villes.length));
  mel(villes, y, j);
  
  noStroke();
 textSize(20)
  fill(255);
  
text("Plus court  =  " + arrondir(maxDistance,4),11, 700);
text('Distance en test = ' + arrondir(d,4),11,650)

text('Nombre de test  = ' + test,1000,700)
text('Nombre de point  = ' + villes.length,1000,650)



}

function arrondir(nombre, dec)
{
  let nombre_signe = nombre >= 0 ? 1 : -1;
  return (Math.round((nombre*Math.pow(10,dec))+(nombre_signe*0.0001))/Math.pow(10,dec)).toFixed(dec);
}
function mousePressed() {

  test =0;
  let b = new Ville(mouseX, mouseY, 50);
  villes.push(b);
  d = calc(villes);
  maxDistance = 100000000;

}
class Ville {
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