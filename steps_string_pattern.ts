/*Write a function that accepts a positive number 'n'
The function should console log a step shape with 'n' levels using the # character.
Make sure the step has spaces on the right hand side!*/

function steps(n: number): void {
  //variable to represent the step shape
  let step = "";
  //create loop according to param n
  for (let i = 1; i <= n; i++) {
    step += "#"; //increment step with each iteration of loop
    console.log(`${step} `);
  }
}

// steps(3);
//output
// #
// ##
// ###

//solution using repeat function
function steps2(n: number): void {
  // Loop through each level
  for (let i = 1; i <= n; i++) {
    // Create a string with 'i' number of '#' characters
    const step = "#".repeat(i);

    // Add spaces to the right side to create the step shape
    console.log(step.padEnd(n * 2 - 1)); // Adjust padding length for alignment
  }
}

//solution using nested loop
function steps3(n: number): void {
  //outer loop
  for (let row = 1; row <= n; row++) {
    let step = "";
    //inner loop
    for (let col = 1; col <= row; col++) {
      if (col <= row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}
steps3(3);
