"use strict";
//Find the character with the maximum occurrences in the string
function maxChar(str) {
    //create obj to hold the key and value of each char in str
    const counter = {};
    //variable to hold the maximum value in counter obj
    let max = 0;
    //variable to hold the maximum character in counter obj
    let maxChar = "";
    //loop through str using "for of loop"
    for (let char of str) {
        if (counter[char]) {
            counter[char] = counter[char] + 1 || 1;
        }
        else {
            counter[char] = 1;
        }
    }
    //loop through obj to determine char with the most occurences
    for (let char in counter) {
        if (counter[char] > max) {
            max = counter[char];
            maxChar = char;
        }
    }
    return maxChar;
}
//solution using a type alias and Object.entries
function maxChar2(str) {
    // Initialize the character count object
    const counter = {};
    // Find the maximum character count and its corresponding character
    let max = 0;
    let maxChar = "";
    // Loop through the input string
    for (let char of str) {
        // Increment the count of the character, initializing it to 1 if it doesn't exist
        counter[char] = (counter[char] || 0) + 1;
    }
    // Loop through the character count object
    for (const [char, count] of Object.entries(counter)) {
        if (count > max) {
            max = count;
            maxChar = char;
        }
    }
    // Return the character with the maximum count
    return maxChar;
}
console.log(maxChar("aabbccccdccccc"));
console.log(maxChar2("15643213211111111"));
