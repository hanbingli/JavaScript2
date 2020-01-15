'use strict';

let three = [];
let five = [];

function sayThree (numArray){
  let three = numArray.filter(item => item % 3 === 0)
  console.log(`${three} are divisible by 3`);
}

function sayFive (numArray){
  let five = numArray.filter(item => item % 5 === 0)
  console.log(`${five} are divisible by 3`);
}
 

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    

    for(let i = startIndex; i <= stopIndex; i ++){
      numbers.push(i);

    }
    console.log(`Out of ${numbers}`)
    sayThree(numbers);
    sayFive(numbers);
    

    
    // make array
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  }
  
threeFive(10, 15, sayThree, sayFive)
