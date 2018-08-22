(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function getArea() {
            // TODO: complete this method
            return (Math.PI * Math.pow(this.radius, 2));
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
                return console.log("This radius is" + this.radius + "is" + Math.round.getArea);
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: ");
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
