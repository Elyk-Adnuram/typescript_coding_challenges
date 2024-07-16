"use strict";
//Write a function that accepts a string. The function should capitalize
// the first letter of each word in the string then return the capitalized string
function capitalize(str) {
    //convert str to array
    const stringArr = str.split(" ");
    //loop through array and apply toUppercase method to first letter of each element in array
    //concatenate the rest of each word and use join to convert back to string
    return stringArr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalize("this is an example sentence."));
console.log(capitalize("what is titlecase"));
//solution 2 using regex expression
function capitalizeFirstLetters(str) {
    return str
        .toLowerCase()
        .split(/\s+/) // Split on one or more whitespace characters
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter and join
        .join(" ");
}
console.log(capitalizeFirstLetters("this is a sentence"));
