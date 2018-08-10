"use strict";




alert ("Welcome to my website!");

var message = ("Hello from External_js!");
console.log(message);

var color = prompt('What is your favorite color?');

var sameColor = "wow i also love " + color + " too";
alert(sameColor);

var userInput = prompt('What is the name of your dog?');
console.log('What a cute dog name ' + userInput);


var pricePerMovie = 3;

var brotherBearDays = prompt("How many days did you rent Brother Bear?");
var littleMermaidDays = prompt("How many days did you rent Little Mermaid?");
var HerculesDays = prompt("How many days did you rent Hercules?");
var totalDays = brotherBearDays + littleMermaidDays + HerculesDays;
var totalCost = totalDays * pricePerMovie;

alert("you owe us " + totalCost + "for your rentals");

console.log("Given the price daily of $" + pricePerMovie + "totalCost" + "Brother Bear for" + BrotheBearDays + ", and" +
    "Hercules for " + HerculesDays + ", and " Little Mermaid for" + littleMermaidDays + "is $ " + totalCost + ".00");


var googleRate = 400;
var amazonRate = 380;
var facebookRate= 350;
var facebookHours = 10;
var googleHours = 6;
var amazonHours = 4;

var totalHours = googleHours + amazonHours + facebookHours;
var total = amazonHours*amazonRate + googleHours*googleRate +facebookHours*facebookRate;

console.log("after working " + totalHours + "at google,facebook,and amazon we made: $" + total + "!");
console.log(message);

var classNotFull = true;
var worksWithSchedule = true;
var canBeEnrolledInClass = classNotFull && worksWithSchedule;

var moreThanTwoItems = True;
var offerIsValid = true;
var isPremiumMember = false;
var offerCanBeApplied = offerIsValid && (moreThanTwoItems || isPremiumMember);

var isLoggedIn = false;
var isAdmin = true;
var isAuthor = false;
var canEditArticle = isLoggedIn && (isAdmin || isAuthor);


var username = prompt("please enter desired username");
var password = prompt("please enter desired password");



var passwordIsLongEnough = password.length >= 5;
var passwordContainsUsername = password.includes(username);
var usernameIsShortEnough = username.length <= 20;
var userNameHasWhiteSpace = username.trim() !=username;
var passwordHasWhiteSpace = password.trim() !=password;

var noWhiteSpace = username == username.trim() && password == password.trim();

var credentialsAreGood = passwordIsLongEnough && !passwordContainsUseranme &&
    usernameIsShortEnough && noWhiteSpace;

if(credentialsAreGood) {
    console.log("your account has been created. check email for conformation link");
    else {
        console.log("username and password must conform to the posted rules...");
    }

}



