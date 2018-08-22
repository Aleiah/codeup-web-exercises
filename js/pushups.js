// function fizzbuzz(num)
//     for (var i = 0; i < num; i++) {
//         if (num % 3 === 0);
//         return("Fizz")
//         } else (num % 5 === 0);
//             return("Buzz")
//         }
//         { else if (num % 15 ===0); {
//             return("Fizzbuzz");
//         }
//     }
//


// function lengthOfLongestWord(sentence) {
//
//     var longest = 0;
//     var wordsArray = "sentence.split(" ");
//     for(var i = 0; i < wordsArray.length; i++) {
//         if (longest < wordsArray[i].length) {
//             longest = wordsArray[i].length;
//         }
//     }
//
//     // if (longest === wordsArray[wordsArray.length-1])
//     //     longest--
//
//         return longest;
//
//     }
//
//
// var testSentence = "I like going out to parties with friends or watching TV."
// console.log(lengthOfLongestWord(testSentence));
//
//
//
// function multiply(x,y) {
//     var product = x;
//     for(var i = 1; i < y; i++) {
//        product  += x;
//     }
//   return product;
//
// }
//
// function exponentiate(x,y) {
//     var product = 1;
//     for(var i = 1; i < y; i++) {
//         product  *= x;
//     }
//     return product;
//
// }
//
//  var message = "happy birthday";
// setTimeOut( function () {alert (message)}, 5000);
//
//

// <h1>Hi everybody!</h1> <-- normal html start head,body exc
// after 2 seconds reveal an h2 that is a link

// setTimeout(function () {
//
//     // += with strings is an "append" operation
//     // assigment with =, is a reassignment operation
//
//     document.body.innerHTML += "<h2>Visit <a href='https://codeup.com'>codeup.com</a> for more info</h2>";
//
//
// }, 2000);