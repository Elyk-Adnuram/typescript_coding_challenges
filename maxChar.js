function maxChar(str) {
    //create object to hold occurrences of each char in str
    var counter = {};
    var max = 0;
    var maxChar = "";
    //loop through input str
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        //Add the count of the character if already exists, else initialize count to 1.
        if (counter[char]) {
            counter[char] += 1;
        }
        else {
            counter[char] = 1;
        }
    }
    //loop through obj with "for-in" loop
    for (var char in counter) {
        if (counter[char] > max) {
            max = counter[char];
            maxChar = char;
        }
    }
    return maxChar;
}
// solution 2 using a type alias and object.entries
function maxChar2(str) {
    //create object to hold occurrences of each char in str
    var counter = {};
    var max = 0; //will hold the maximum value in the counter obj
    var maxChar = ""; //will hold the key of the max variable
    //loop through input str
    for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
        var char = str_2[_i];
        //Add the count of the character if already exists, else initialize count to 1.
        counter[char] = counter[char] += 1 || 1;
    }
    // Loop through the character count object
    for (var _a = 0, _b = Object.entries(counter); _a < _b.length; _a++) {
        var _c = _b[_a], char = _c[0], count = _c[1];
        if (count > max) {
            max = count;
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(maxChar2("abcccd"));
