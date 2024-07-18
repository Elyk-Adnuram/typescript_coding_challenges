//Write a function that returns the number of vowels in a string
//Vowels are the letters a.e.i.o.u

function vowels(str: string) {
  //use regex and match method to check if character set exists in str
  return str.match(/[aeiou]/gi)?.length;
}

function vowels2(str: string): number {
  const vowelsCheck = ["a", "e", "i", "o", "u"];
  const vowelsArr = [];
  //loop through str and set to lowercase to ensure case insensitivity
  for (let letter of str.toLowerCase()) {
    //includes method checks if vowel exists in str
    if (vowelsCheck.includes(letter)) {
      //push vowels from str into empty array
      vowelsArr.push(letter);
    }
  }
  //return the length of array
  return vowelsArr.length;
}

// console.log(vowels("hi there"));
console.log(vowels2("coding Money"));
