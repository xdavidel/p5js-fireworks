function Firework() {
    this.color = {
        r: random(255),
        g: random(255),
        b: random(255)
    }
    this.particle = new Particle(random(width), height, this.color, true);
    this.clusters = [];
    this.exploded = false;

    this.update = () => {

        if (!this.exploded) {
            this.particle.applyForce(gravity);
            this.particle.update();
            this.particle.show();

            if (this.particle.vel.y >= 0) {
                this.explode();
            }
        }

        for (var i = this.clusters.length - 1; i >= 0; i--) {
            var cluster = this.clusters[i];

            if (cluster.isDone()) {
                this.clusters.splice(i, 1);
            } else {
                cluster.applyForce(gravity);
                cluster.update();
            }
        }
    }

    this.explode = () => {
        this.exploded = true;
        var len = random(20, 50);
        for (var i = 0; i < len; i++) {
            this.clusters.push(new Particle(this.particle.pos.x, this.particle.pos.y, this.color, false));
        }
    }

    this.show = () => {
        if (!this.exploded) {
            this.particle.show();
        }

        for (var cluster of this.clusters) {
            cluster.show();
        }
    }

    this.isDone = () => {
        return this.exploded && this.clusters.length == 0;
    }
}