let bubbles = [];

function setup() {
    createCanvas(600, 400);

    let d = calc(bubbles);


    maxDistance = d;
    meilleurParcours = bubbles.slice();
}

function mousePressed() {

    let b = new Bubble(mouseX, mouseY, 50);
    bubbles.push(b);

}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {

        bubbles[i].show();
    }
    let d = calc(bubbles);
    console.log(d);
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            this.brightness = 255;
        }
    }



    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
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