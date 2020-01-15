'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
console.log(letters.indexOf('d'))


let unique1 = [...new Set(letters)];
console.log(unique1);

let unique2 =letters.filter((item, index) => letters.indexOf(item) === index );
//if the index of an item in an array isn't its ACTUEL index, it means there is another one before it
console.log(unique2);

