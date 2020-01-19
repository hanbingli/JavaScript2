'use strict';


// ***************************Important
// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

//10 and 9; 
// in the function the variable x is reassigned with a new value. 
// However, the new value stays in the scope of the function. 
// so the result 10 would only be the output when the whole function is called.



// ***************************Important
const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

//
//  the result would be {x: 10} and {x: 9}
// as last Q, the value is only altered inside the function
