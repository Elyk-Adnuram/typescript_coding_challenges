"use strict";
//Write a program the console logs the numbers from 1 to 1.
//For multiples of three print "fizz" instead of the number
// and for the multiples of five print "buzz". For numbers which
// are multiples of both three and five print "fizzbuzz"
function fizzBuzz(n) {
    //loop through n
    for (let i = 1; i <= n; i++) {
        //check both three and five
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        //condition to check multiples of five
        else if (i % 5 === 0) {
            console.log("buzz");
            //condition to check multiples of three
        }
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        else {
            //print everything else
            console.log(i);
        }
    }
}
fizzBuzz(15);
//solution using ternary operator
function fizzBuzz2(n) {
    // Loop through numbers 1 to n
    for (let i = 1; i <= n; i++) {
        console.log(i % 3 === 0 && i % 5 === 0 ? "fizzbuzz" : i % 3 === 0 ? "fizz" : i % 5 === 0 ? "buzz" : i);
    }
}
fizzBuzz2(30);
