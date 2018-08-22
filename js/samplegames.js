var hitme = function () {
    return Math.floor((Math.random() *11) +1)
}

var count = 0;
if (confirm("Do you want to play a game?")) {
    while (count <= 50) {
        if (confirm("Your score is " + count + " . Do you want another card?"))
        {
            count += hitme();
        } else break;
    }
    if (count > 50) {
        alert("You busted!!")
    }
    else {
        alert("Your score is" + count);
    }
}

if (confirm("Do you want to play a game?")) {
    var magicNumber = Math.floor((Math.random() * 100) + 1);
    var ourGuess;

    do {
        ourGuess = parseInt(prompt("Guess a number in between 1 and 100"))
        if (ourGuess < magicNumber) {
            alert("Your guess is too low!!!");
        } else if (ourGuess > magicNumber) {
            alert("Your guess is too high!");
        }
    } while (ourGuess !== magicNumber)
    alert("Congratulations!! you guessed it")

}

var count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

for (var i = 0; i < 10;  i++) {
    console.log(i);
}

