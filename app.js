let firework;
let gravity;

function setup() {
    createCanvas(600,500);
    stroke(255);
    strokeWeight(4);
    gravity = createVector(0, 0.2);
    firework = new Particle(random(width), height);
}

function Particle(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector(0,-10);
    this.acc = createVector(0,0);

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.show = function() {
        point(this.pos.x, this.pos.y);
    }
}

function draw() {
    background(51);
    firework.applyForce(gravity);
    firework.update();
    firework.show();
}
