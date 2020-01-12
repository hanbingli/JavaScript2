'use strict';

function doubleEvenNumbers(numbers) {
    let evenNumbers = numbers.filter(numbers=> numbers%2 === 0)
    console.log(evenNumbers)
    let double = numbers.map(evenNumbers => evenNumbers * 2)
    return double;
  }
  
  const myNumbers = [1, 2, 3, 4];
  console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console