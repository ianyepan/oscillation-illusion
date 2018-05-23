let angle = 0;
let w = 50;
let ma;
let maxD;

function setup() {
    createCanvas(500,500, WEBGL);
    ma = atan(1 / sqrt(2));
    maxD = dist(0, 0, 200, 200);
}

function draw() {
    background(58);     // Dark grey background
    ortho(-400, 400, 400, -400, 0, 1000);
    directionalLight(255, 255, 255, -0.3, -.5, -0.5); // Pink light

    translate(0, 20, -40);    // Drag graph down 20px and zoom out 40
    rotateX(ma);
    rotateY(-QUARTER_PI);
    rectMode(CENTER);


    let offset = 0;
    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < width; x += w) {
            push();
            let d = dist(x, z, width/2, height/2);
            let offset = map(d, 0, maxD, -2, 2);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 50, 230);
            ambientMaterial(95,255,0);     // Light green boxes
            translate(x - width/2, 0, z - height/2);
            box(w-5, h, w);
            pop();
        }
    }


    angle += 0.08;
}
