function maxChar(str: string): {} {
  //create object to hold occurrences of each char in str
  let counter: { [char: string]: number } = {};
  let max = 0;
  let maxChar = "";
  //loop through input str
  for (let char of str) {
    //Add the count of the character if already exists, else initialize count to 1.
    if (counter[char]) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }
  }
  //loop through obj with "for-in" loop
  for (let char in counter) {
    if (counter[char] > max) {
      max = counter[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// solution 2 using a type alias and object.entries
function maxChar2(str: string): {} {
  // Create a type alias for a Character Count object
  type CharCount = { [char: string]: number };
  //create object to hold occurrences of each char in str
  let counter: CharCount = {};
  let max = 0; //will hold the maximum value in the counter obj
  let maxChar = ""; //will hold the key of the max variable
  //loop through input str
  for (let char of str) {
    //Add the count of the character if already exists, else initialize count to 1.
    counter[char] = counter[char] += 1 || 1;
  }
  // Loop through the character count object
  for (const [char, count] of Object.entries(counter)) {
    if (count > max) {
      max = count;
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxChar2("abcccd"));
