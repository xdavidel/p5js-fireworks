function Particle(x, y, color, core) {
    this.pos = createVector(x, y);
    this.lifespan = 255;

    if (core) {

        this.vel = createVector(0, random(-11, -8));
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(1, 4));

    }
    this.acc = createVector(0, 0);

    this.applyForce = (force) => {
        this.acc.add(force);
    }

    this.update = () => {
        if (!core) {
            this.vel.mult(0.95);
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.show = () => {
        if (!core) {
            strokeWeight(3);
            stroke(color.r, color.g, color.b, this.lifespan);
        } else {

            strokeWeight(4);
            stroke(color.r, color.g, color.b);
        }

        point(this.pos.x, this.pos.y);
    }

    this.isDone = () => {
        return this.lifespan <= 0 || this.pos.y >= height;
    }

}