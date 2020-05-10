let bubbles = [];

function setup() {
    createCanvas(600, 400);



}

function mousePressed() {

    let b = new Bubble(mouseX, mouseY, 50);
    bubbles.push(b);

}

function draw() {



    maxDistance = d;
    meilleurParcours = bubbles.slice();
    background(0);
    for (let i = 0; i < bubbles.length; i++) {

        bubbles[i].show();
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
    for (let i = 0; i < bubbles.length - 1; i++) {
        vertex(meilleurParcours[i].x, meilleurParcours[i].y)
        noFill();
    }
    endShape();

    console.log(bubbles.length);
    if (bubbles.length > 1) {
        let y = floor(random(bubbles.length));
        let j = floor(random(bubbles.length));
        mel(bubbles, y, j);

        let d = calc(bubbles);
        if (d < maxDistance) {
            maxDistance = d;
            console.log(maxDistance);
            meilleurParcours = bubbles.slice();

        }
    }

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