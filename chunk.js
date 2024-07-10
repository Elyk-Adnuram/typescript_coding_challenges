"use strict";
//Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
function chunk(arr, size) {
    //Create an empty array to hold the chunks called chunked_arr
    const chunked_arr = [];
    //this is the start position for the slice method
    let index = 0;
    while (index < arr.length) {
        //push sliced arrays into chunked_arr
        chunked_arr.push(arr.slice(index, index + size));
        index += size;
    }
    return chunked_arr;
}
// console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2, 3, 4, 5], 2));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
function chunkArray(array, size) {
    const chunks = [];
    //We use a for loop to iterate through the original array. The loop iterates with a step of size to ensure
    //we move to the next chunk after adding elements to the current one.
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        chunks.push(chunk);
    }
    return chunks;
}
console.log(chunkArray([1, 2, 3, 4], 2));
console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
