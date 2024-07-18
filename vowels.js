"use strict";
//Write a function that returns the number of vowels in a string
//Vowels are the letters a.e.i.o.u
function vowels(str) {
    var _a;
    //use regex and match method to check if character set exists in str
    return (_a = str.match(/[aeiou]/gi)) === null || _a === void 0 ? void 0 : _a.length;
}
function vowels2(str) {
    const vowelsCheck = ["a", "e", "i", "o", "u"];
    const vowelsArr = [];
    //loop through str and set to lowercase to ensure case insensitivity
    for (let letter of str.toLowerCase()) {
        //includes method checks if vowel exists in str
        if (vowelsCheck.includes(letter)) {
            //push vowels from str into empty array
            vowelsArr.push(letter);
        }
    }
    //return the length of array
    return vowelsArr.length;
}
// console.log(vowels("hi there"));
console.log(vowels2("coding Money"));
