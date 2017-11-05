var s;
var f;
var c;

function setup() {
     c = createCanvas(400, 400);
     s = new Snake();
     f = new Food();

}

function draw() {

     s.new();
     s.update();
     keyPressed();
     f.foodRestraint();
     background(200);
}

//Core Functions for use and fetch from .html

function keyPressed() {
     if (keyCode === UP_ARROW) {
          s.dir(0, -1);
     }
     else if (keyCode === DOWN_ARROW) {
          s.dir(0, 1);
     }
     else if (keyCode === LEFT_ARROW) {
          s.dir(-1, 0);
     }
     else if (keyCode === RIGHT_ARROW) {
          s.dir(1, 0);
     }
}

function getScl() {
     var input = document.getElementById('userScl').value;
     input = constrain(input, 1, 10);
          if (input >= 1) {
               return input;
          }
          else {
               return 1; //return scale default value
               //
          }
}

function getRandom(min, max) {
     //Range min - max
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
     //Random color on the hex grid
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
