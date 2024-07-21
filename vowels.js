// "use strict";
// //Write a function that returns the number of vowels in a string
// //Vowels are the letters a.e.i.o.u
// function vowels(str) {
//     var _a;
//     //use regex and match method to check if character set exists in str
//     return (_a = str.match(/[aeiou]/gi)) === null || _a === void 0 ? void 0 : _a.length;
// }
// function vowels2(str) {
//     const vowelsCheck = ["a", "e", "i", "o", "u"];
//     const vowelsArr = [];
//     //loop through str and set to lowercase to ensure case insensitivity
//     for (let letter of str.toLowerCase()) {
//         //includes method checks if vowel exists in str
//         if (vowelsCheck.includes(letter)) {
//             //push vowels from str into empty array
//             vowelsArr.push(letter);
//         }
//     }
//     //return the length of array
//     return vowelsArr.length;
// }
// // console.log(vowels("hi there"));
// console.log(vowels2("coding Money"));

function steps(n) {
  let step = "";
  //create loop according to param n
  for (let i = 1; i <= n; i++) {
    step += "#";
    console.log(`${step}`);
  }
  //print steps for each iteration of n
}

function printStepShape(n) {
  // Loop through each level
  for (let i = 1; i <= n; i++) {
    // Create a string with 'i' number of '#' characters
    const step = "#".repeat(i);

    // Add spaces to the right side to create the step shape
    console.log(step.padEnd(n * 2 - 1)); // Adjust padding length for alignment
  }
}

printStepShape(6);
