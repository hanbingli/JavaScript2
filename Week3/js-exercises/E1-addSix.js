'use strict';

function createBase(a) {
    function sum (b){
        return a + b

    }
    return sum
    // Put here your logic...
  }
  
const addSix = createBase(6);
  
  // Put here your function calls...
console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));




15
24
36