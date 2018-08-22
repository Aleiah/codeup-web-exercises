var i = 2;
for (var i = 2; i <= 65536; i*=) {
    console.log(i*=);
}

//for loop ^^

var i = 2;
while ( i <= 65536) {
    console.log(i)
    i  *= 2;
    }


var allCones = Math.floor(Math.random() * 50) + 50;
var purchasedCones;


console.log("The number of cones to be sold is" + allCones);

do {
    purchasedCones = Math.floor(Math.random() * 5) + 1;
    console.log("The next customer ordered" + purchasedCones + "number of cones");
        if (purchasedCones <= allCones) {
            console.log("Sold" + purchasedCones + "number of cones.");
            allCones = allCones - purchasedCones;
            console.log("Now I have" + allCones + "in my inventory")
    } else  {
        console.log("Im sorry I dont have enough cones to fill your order.");
    }
        console.log("Nest customer, please!");
} while (allCones > 0);
console.log("All cones have been sold!!");


