function maxChar(str: string): {} {
  //iterate through string
  let counter = {};
  for (let char of str) {
    //if the char is in the counter then increment by 1
    if (counter[char]) {
      counter[char] += 1;
      //if the char is not in the counter then set value to 1
    } else {
      counter[char] = 1;
    }
  }

  return counter;
}
//determine how many times each character occurs

console.log(maxChar("abcccd"));
