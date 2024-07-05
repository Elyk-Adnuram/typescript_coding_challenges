function maxChar(str: string): {} {
  //create object to hold occurrences of each char in str
  let counter = {};
  for (let char of str) {
    //if the char is in the counter then increment it by 1 in the counter obj
    if (counter[char]) {
      counter[char] += 1;
      //if the char is not in the counter then set value to 1 in the counter obj
    } else {
      counter[char] = 1;
    }
  }
  return counter;
}
//determine how many times each character occurs

console.log(maxChar("abcccd"));
