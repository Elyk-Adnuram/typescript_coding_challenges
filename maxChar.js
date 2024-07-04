function maxChar(str) {
    //iterate through string
    var counter = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        //if the char is in the counter then increment by 1
        if (counter[char]) {
            counter[char] += 1;
            //if the char is not in the counter then set value to 1
        }
        else {
            counter[char] = 1;
        }
    }
    return counter;
}
//determine how many times each character occurs
console.log(maxChar("abcccd"));
