function Snake() {
    this.x = 0;
    this.y = 0;
    this.xvel = 0;
    this.yvel = 0;

    this.dir = function(x, y) {
        this.xvel = x * getScl();
        this.yvel = y * getScl();
    }

    this.new = function() {
        fill(255);
        rect(this.x, this.y, 20, 20);
    }

    this.update = function() {
        this.x = this.x + this.xvel;
        this.y = this.y + this.yvel;
        // Limit x and y values to stay on the canvas

        //Reset snake size if hit border = true HERE...
        //if (this.x >= width || this.y >= height || this.x <= 0 || this.y <= 0) {
            //tail.drop();
        //}

        this.x = constrain(this.x, 0, width - 20);
        this.y = constrain(this.y, 0, height - 20);

    }

    /*this.collide = function() {
    }

    this.eat = function() {

    }

    this.grow = function() {
        // GROW TAIL PROCEDURE HERE
   }*/
}
