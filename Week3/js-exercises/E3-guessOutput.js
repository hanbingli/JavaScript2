'use strict';

// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

//the logit of the computer would be:
// let a;
// const x;
// a = 10;
// x=(function() {
//     a = 12;
//     return function() {
//       alert(a);
//     };
//   })();

// when x is called, 
// in function1(a=12) a is reassigned with a value 12, 
// and function1 would return the closure function2, in which the new value 12 in the outer function would be used
// so the result would be "alert 12"