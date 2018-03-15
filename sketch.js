var i;
var y;
let ragged = [];
var yOne;
var yTwo;
var yThree;
var yFour;
var yFive;

function setup() {
    createCanvas(1600, 1000);
    background(34,45,91);
    ragged = new Ragged();
    frameRate(1);
}
        
class Ragged {
    constructor() {
    
    }
//    move() {
//        xOne = xOne + random(-5, 5);
//        xTwo = xTwo + random(-5, 5);
//    }
    show() {
        noFill();
        stroke(random(50, 190),random(50, 190),224);
        strokeWeight(random(1, 10));
        strokeCap(SQUARE);
        beginShape();
            vertex(xOne + i, yOne + y);
            vertex(xTwo + i, yTwo + y);
        endShape(CLOSE);
    }
}

function draw() {
    for (i = 0; i < width; i += 10) {
        for (y = 0; y < height; y += 50) {
            xOne = i;
            xTwo = i;
            
            yOne = y;
            yTwo = y + random(90);

            ragged.show();
        //    ragged.move();
        }
    }
}


