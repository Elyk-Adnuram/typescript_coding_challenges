//Given a string, return true if a palindrome or false if not
//solution using "for of loop"
function palindrome(str) {
    var reversedStr = "";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        reversedStr = char + reversedStr;
    }
    if (str === reversedStr)
        return true;
    else
        return false;
}
//solution using built-in methods and arrow function
var palindrome2 = function (str) {
    var reversedStr = str.split("").reverse().join("");
    if (str === reversedStr)
        return true;
    else
        return false;
};
//calling functions
console.log(palindrome("anna")); //output true
console.log(palindrome2("anna")); //output true
console.log(palindrome("bo-katan")); //output false
console.log(palindrome2("moff")); //output false
