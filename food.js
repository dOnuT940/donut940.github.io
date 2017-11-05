function Food() {
    this.x = 0;
    this.y = 0;

    var fCount = [];

    var loc = createVector(this.x, this.y);

    this.new = function() {
         /*
        var randX = getRandom(10, 390);
        var randY = getRandom(10, 390);
        this.x = randX;
        this.y = randY;
        loc = createVector(this.x, this.y);
        fill(getRandomColor());
        rect(this.x, this.y, getRandom(15, 25), getRandom(15, 25), 10);
        append(fCount, loc);
        console.log("rect()");
        console.log(fCount.length);
        */
    }

    /*this.getFoodLoc = function(x, y) {
        return loc;
   }*/

    this.removeFood = function() {}

    this.getFoodCount = function() {
         return fCount.length;
    }

    this.foodRestraint = function() {
         if (this.getFoodCount() < 10) {
             var randX = getRandom(10, 390);
             var randY = getRandom(10, 390);
             this.x = randX;
             this.y = randY;
             loc = createVector(this.x, this.y);
             fill(getRandomColor());
             rect(this.x, this.y, getRandom(15, 25), getRandom(15, 25), 10);
             append(fCount, loc);
             console.log("rect()");
             console.log(fCount.length);
         }
    }
}
