//Write a function that accepts a positive number N
//The function should console log a pyramid shape with N levels using the # character
//Make sure the pyramid has spaces on both the left and right hand sides

function pyramid(n: number): void {
  const midPoint = Math.floor((n * 2 - 1) / 2);
  //loop according to n param
  for (let row = 0; row < n; row++) {
    let pyramid = "";
    for (let col = 0; col < n * 2 - 1; col++) {
      if (col >= midPoint - row && col <= midPoint + row) {
        pyramid += "#";
      } else {
        pyramid += " ";
      }
    }
    console.log(`${pyramid}`);
  }
}

//solution using multiple for loops
function printPyramid(rows: number): void {
  // Loop through each row
  for (let i = 1; i <= rows; i++) {
    // Calculate the number of spaces needed for proper alignment
    const spaces = rows - i;

    // Create the empty string for the current row
    let row = "";

    // Add spaces before the hashes
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }

    // Add the required number of hashes
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "#";
    }

    // Add spaces after the hashes for symmetry
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }

    // Console log the current row
    console.log(row);
  }
}

// Example usage
printPyramid(5);
