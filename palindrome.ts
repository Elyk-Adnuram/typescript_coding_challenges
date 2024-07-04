//Given a string, return true if a palindrome or false if not

//solution using "for of loop"
function palindrome(str: string): boolean {
  let reversedStr: string = "";
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  if (str === reversedStr) return true;
  else return false;
}

//solution using built-in methods and arrow function
const palindrome2 = (str: string): boolean => {
  let reversedStr: string = str.split("").reverse().join("");
  if (str === reversedStr) return true;
  else return false;
};

//solution using every() array method
const palindromeCheck = (str: string): boolean => {
  //every takes a callback with each char and index as params
  return str
    .toLowerCase()
    .split("")
    .every((char, index) => {
      // check that each char in the array matches the mirrored char
      return char === str[str.length - index - 1];
    });
};

//calling functions
console.log(palindrome("anna")); //output true
console.log(palindrome2("anna")); //output true
console.log(palindrome("bo-katan")); //output false
console.log(palindrome2("moff")); //output false
console.log(palindromeCheck("bob")); // output true
