var fireworks = [];
var gravity;

function setup() {
    createCanvas(300, 300);
    background(0);

    gravity = createVector(0, 0.2);
}

function draw() {
    background(0, 25);
    if (random(1) <= 0.05) {
        fireworks.push(new Firework());
    }


    for (var i = fireworks.length - 1; i >= 0; i--) {
        var firework = fireworks[i];

        if (firework.isDone()) {
            fireworks.splice(i, 1);
        } else {
            firework.update();
            firework.show();

        }
    }

}