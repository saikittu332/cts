function circle(radius) {




    this.radius = radius,
        this.draw = function () {

            console.log("draw circle");
        }
};



var circle1 = new circle(3);

console.log(circle1.radius);
circle1.draw();



var circle2 = new circle(15);
circle2.color = "yellow";

console.log(circle2.color)