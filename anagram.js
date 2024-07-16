"use strict";
// Check to see if two provided strings are anagrams of each other
// One string is an anagram of another if it uses the same characters in the same quantity
// Only consider characters, not spaces or punctuation.Consider capital letters to be
// the same as lower case
function convertString(str) {
    //set strings to lower case
    //use regex to remove non-alphanumeric characters.
    //convert to array and sort each character alphabetically and join back to string
    return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}
function anagrams(stringA, stringB) {
    // call convertString function
    return convertString(stringA) === convertString(stringB);
}
console.log(anagrams("RAIL SAFETY!", "fairy tales"));
console.log(anagrams("hi there", "bye there"));
